export default function Footer() {
    return (
      <div>
        <footer className="footer items-center p-6 bg-black text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-lg font-semibold">© {new Date().getFullYear()} Toby Killen</span>
            <span className="text-sm">All rights reserved.</span>
          </div>
        </footer>
      </div>
    );
  }
  