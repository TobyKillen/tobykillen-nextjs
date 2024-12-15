import Link from 'next/link';

export default function Linkintree() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 p-4">
      {/* Avatar Section */}
      <div className="flex flex-col items-center mt-8">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">Toby Killen</h1>
        <p className="text-sm text-gray-600">@itoby24</p>
      </div>

      {/* Link Buttons */}
      <div className="mt-8 w-full max-w-md space-y-4">
        <a
          href="https://www.github.com/tobykillen"
          className="btn btn-primary w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://clubculture.app"
          className="btn btn-primary w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          clubculture.app
        </a>
        <Link href="/" className="btn btn-primary w-full">
          tobykillen.com
        </Link>
        <a
          href="https://attaboybelfast.com"
          className="btn btn-primary w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          attaboybelfast.com
        </a>
        <Link href="/contact" className='btn btn-primary w-full'>
          Contact
        </Link>
      </div>
    </div>
  );
}
