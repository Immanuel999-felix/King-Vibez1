// pages/index.js

import Navbar from "../components/Navbar";

export default function Home() {
  // Placeholder data for dynamic content
  const placeholderSongs = [
    { title: "Song 1", description: "Short description" },
    { title: "Song 2", description: "Short description" },
    { title: "Song 3", description: "Short description" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      
      {/* Increased py-12 to py-20 for better top/bottom spacing */}
      <main className="max-w-6xl mx-auto px-6 py-20"> 
        {/* --- Hero Section --- */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight" // Enhanced font size and weight
              style={{color: '#fff'}} 
            >
              KING VIBEZ
            </h2>
            <p className="mt-6 text-zinc-300 max-w-lg text-lg">
              Street-born bars. Luxury vibes. New album dropping soon — stay tuned.
            </p>

            <div className="mt-10 flex gap-4"> {/* Increased mt-8 to mt-10 */}
              {/* Added shadow for visual pop */}
              <button className="px-8 py-3 rounded-full bg-kvred text-black font-semibold hover:scale-105 transition duration-300 shadow-xl shadow-kvred/30">
                Listen Now
              </button>
              <button className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:border-kvgold transition duration-300">
                Merch
              </button>
            </div>

            <div className="mt-8 text-sm text-zinc-400">
              <strong>Latest single:</strong> <span className="text-zinc-200">"Street Gold"</span>
            </div>
          </div>

          {/* Album Art Card */}
          <div className="bg-gradient-to-tr from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-2xl shadow-2xl border border-zinc-800">
            <div className="h-80 w-full rounded-lg bg-[url('/placeholder-album.jpg')] bg-cover bg-center" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold">Street Gold</div>
                <div className="text-sm text-zinc-400">ft. Major Artist</div>
              </div>
              <div className="px-3 py-1 rounded-md bg-kvgold text-black font-semibold">NEW</div>
            </div>
          </div>
        </section>

        {/* --- Music Section --- */}
        <section className="mt-24"> {/* Increased spacing to mt-24 */}
          <h3 className="text-3xl font-extrabold tracking-tight border-b border-zinc-700/50 pb-2 inline-block">
            Music 🎶
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through dynamic data */}
            {placeholderSongs.map((song, i) => (
              <div 
                key={i} 
                className="bg-[#080808] p-4 rounded-xl border border-zinc-800 
                          hover:border-kvgold transition duration-300 cursor-pointer 
                          shadow-lg hover:shadow-kvgold/10" // Added shadow effect
              >
                <div className="h-48 bg-zinc-900 rounded-md" />
                <h4 className="mt-4 text-xl font-semibold">{song.title}</h4>
                <p className="text-sm text-zinc-500 mt-1">{song.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="mt-20 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-zinc-400 text-sm">
          <div>© {currentYear} King Vibez</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">YouTube</a>
          </div>
        </div>
      </footer>
    </>
  );
}
