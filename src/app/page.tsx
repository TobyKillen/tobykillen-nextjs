import Link from "next/link";

export default function Home() {
  return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,water')"
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Toby Killen</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link className="btn btn-primary" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    

  );
}
