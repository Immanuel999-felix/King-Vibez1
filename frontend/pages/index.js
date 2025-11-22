import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/d0Fv6ZS9/IMG-20250425-WA0004.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-8xl font-extrabold text-red-600 drop-shadow-2xl animate-pulse">
            KING VIBEZ
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-gray-200">
            Afro • Trap • Global Sound
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/music"
              className="px-8 py-3 bg-red-600 text-xl rounded-full hover:bg-red-700 transition shadow-lg"
            >
              Listen Now
            </a>
            <a
              href="/videos"
              className="px-8 py-3 bg-white/10 border border-white rounded-full text-xl hover:bg-white/20 transition"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED ALBUMS */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="section-title">Featured Albums</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((x) => (
            <div
              key={x}
              className="bg-zinc-900 rounded-xl p-4 border border-red-600 hover:shadow-red-600/50 hover:shadow-xl transition"
            >
              <div className="h-64 bg-zinc-800 rounded-lg"></div>
              <h3 className="mt-4 text-2xl font-bold">Album {x}</h3>
              <button className="mt-3 px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700">
                Play
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TOUR SECTION */}
      <section className="px-6 md:px-20 py-20 bg-zinc-950">
        <h2 className="section-title">Tour Dates</h2>

        <div className="space-y-6">
          <div className="border-b border-red-600 pb-4 flex justify-between">
            <p className="text-xl font-bold">Lagos, Nigeria</p>
            <p className="text-red-400">Feb 23, 2025</p>
          </div>
          <div className="border-b border-red-600 pb-4 flex justify-between">
            <p className="text-xl font-bold">Abuja, Nigeria</p>
            <p className="text-red-400">March 11, 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
        }
