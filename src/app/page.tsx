import Image from "next/image";
import BackgroundImage from "./../../public/background1.jpeg";
import Myself from "./../../public/me_2.jpg";

export default function Home() {
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
              width={176} // size hint for performance, not style
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white uppercase italic">Toby Killen</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-200 uppercase font-medium">
            Software Engineer · Belfast, UK
          </p>
        </div>
      </div>
    </main>
  );
}
