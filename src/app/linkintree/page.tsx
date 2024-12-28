import Link from 'next/link';
import Image from 'next/image';
import Myself from "./../../../public/me_1.jpg";
import Background from "./../../app/components/background";
import BackgroundImage from './../../../public/background.jpg';

export default function Linkintree() {
  return (
    <Background src={BackgroundImage}>
      <div className="flex flex-col items-center min-h-screen p-4">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mt-8">
          <div className="avatar">
            <div className="w-48 rounded-full ring-offset-base-100 ring-offset-2">
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
          <h1 className="text-2xl font-bold mt-4 text-white">Toby Killen</h1>
          <p className="text-sm text-gray-600 ">@itoby24</p>
        </div>

        {/* Link Buttons */}
        <div className="mt-8 w-full max-w-md space-y-4">
          <Link href="/" className="btn btn-netural w-full">
            Home
          </Link>
{/* 
          <Link href="/contact" className="btn btn-netural w-full">
            Contact
          </Link> */}
          <Link
            href="https://www.github.com/tobykillen"
            className="btn btn-netural w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/tobykillen"
            className="btn btn-netural w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <a
            href="https://clubculture.app"
            className="btn btn-netural w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            clubculture.app
          </a>
          <a
            href="https://attaboybelfast.com"
            className="btn btn-netural w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            attaboybelfast.com
          </a>
        </div>
      </div>
    </Background>
  );
}
