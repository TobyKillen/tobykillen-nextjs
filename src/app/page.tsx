import Link from "next/link";
import Image from "next/image";
import Myself from "./../../public/me_1.jpg";
import Background from "./components/background";
import BackgroundImage from './../../public/background.jpg';

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <Background src={BackgroundImage}>
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="avatar mb-6">
            <div className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-100">
              <Image
                src={Myself}
                alt="Profile Avatar"
                width={300}
                height={300}
                className="rounded-full"
                priority // Ensures the image loads immediately
              />
            </div>
          </div>
          <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase text-white">Toby Killen</h1>
          <p className="mb-5 text-base md:text-lg text-center uppercase font-black text-white">
            Software Engineer. Belfast, UK
          </p>
          <div className="flex justify-center gap-4 mb-5">
            <Link
              href="https://github.com/tobykillen"
              target="_blank"
              className="btn btn-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/tobykillen"
              target="_blank"
              className="btn btn-primary"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </Background>
    </div>
  );
}
