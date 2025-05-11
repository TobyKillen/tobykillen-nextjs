import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-[#e5e5e5] py-10 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Logo Section */}
          <div className="text-center md:text-left w-full md:w-auto">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <h2 className="text-2xl font-semibold tracking-wide text-white">
                Toby Killen
              </h2>
            </Link>
            <p className="text-sm text-[#999999] mt-2">Software engineer based in <strong>Belfast, Northern Ireland</strong>, with a personal interest in security.</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center md:text-left w-full md:w-auto">
            <div>
              <h3 className="font-medium text-base text-white">Managed Domains</h3>
              <ul className="mt-2 space-y-2 text-[#cccccc] text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">tobykillen.com</Link></li>
                <li><Link href="https://www.clubculture.app" className="hover:text-white transition-colors">clubculture.app</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-base text-white">Socials</h3>
              <ul className="mt-2 space-y-2 text-[#cccccc] text-sm">
                <li><Link href="https://www.github.com/tobykillen" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="https://www.linkedin.com/in/tobykillen" className="hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 text-center text-[#777777] text-xs border-t border-[#222]">
          &copy; {new Date().getFullYear()} Toby Killen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
