import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/d0Fv6ZS9/IMG-20250425-WA0004.jpg')",
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 drop-shadow-lg">
            KING VIBEZ
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light opacity-90">
            Afro & Trap Music • The New Wave
          </p>

          <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all rounded-xl text-lg font-semibold">
            Listen Now
          </button>
        </div>
      </section>

      {/* SECTION: BIO */}
      <section className="px-6 md:px-20 py-16 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-6">
          Who is King Vibez?
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-3xl">
          King Vibez is a rising Nigerian artist known for his unique fusion of
          Afrobeat, Trap, and street vibes. His sound carries raw emotions,
          energy, and rhythm that connects deeply with fans worldwide.
        </p>
      </section>

      {/* SECTION: MUSIC */}
      <section className="px-6 md:px-20 py-16 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-8">
          Latest Releases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((song) => (
            <div
              key={song}
              className="bg-zinc-900 rounded-xl p-4 shadow-lg border border-red-600"
            >
              <div className="h-48 bg-zinc-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Song Title {song}</h3>
              <button className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition">
                Play
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-black border-t border-red-700 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} King Vibez • All Rights Reserved
        </p>
      </footer>
    </div>
  );
            }
