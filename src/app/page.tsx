import Link from "next/link";
import Image from "next/image";
import Myself from "./../../public/me_1.jpg";
import BackgroundImage from "./../../public/background.jpeg";
import Background from "./components/background";

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <Background src={BackgroundImage}>
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="avatar mb-6">
            <div className="w-128 rounded-full">
              <Image
                src={Myself}
                alt="Profile Avatar"
                placeholder="blur"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="mb-5 text-5xl font-bold uppercase">Toby Killen</h1>
          <p className="mb-5 max-w-xl text-center text-lg">
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
