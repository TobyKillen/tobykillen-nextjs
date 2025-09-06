"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundImage from "./../../public/background1.jpeg";
import Myself from "./../../public/me_2.jpg";

export default function Home() {
  const name = "Toby Killen"; 
  const titles = ["Software Engineer", "Tech Enthusiast", "Petrol Head"]

  // Name typing
  const [nameIndex, setNameIndex] = useState(0);

  // Titles typing/deleting
  const [titleIndex, setTitleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Cursor blink
  const [blink, setBlink] = useState(true);

  // Animate name once
  useEffect(() => {
    if (nameIndex < name.length) {
      const timeout = setTimeout(() => {
        setNameIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, name]);

  // Animate rotating titles
  useEffect(() => {
    if (subIndex === titles[titleIndex].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, titleIndex, deleting, titles]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <main className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/60 px-4">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center p-6 sm:p-10 backdrop-blur-md bg-white/10 shadow-lg rounded-2xl">
          <div className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden">
            <Image
              src={Myself}
              alt="Toby Killen"
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Name (typed once) */}
          <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white uppercase italic">
            {name.substring(0, nameIndex)}
            {blink && nameIndex < name.length ? "|" : ""}
          </h1>

          {/* Rotating Titles + Static Location */}
          <p className="mt-2 text-sm sm:text-base text-gray-200 uppercase font-medium">
            {titles[titleIndex].substring(0, subIndex)}
            {blink ? "|" : " "} · Belfast, UK
          </p>
        </div>
      </div>
    </main>
  );
}
