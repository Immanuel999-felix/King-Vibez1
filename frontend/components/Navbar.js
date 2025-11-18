// components/Navbar.js

export default function Navbar() {
  return (
    <header className="py-6 border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-kvgold">KV</h1>
        <div className="flex gap-6 text-zinc-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Music</a>
          <a href="#" className="hover:text-white transition">Videos</a>
          <a href="#" className="hover:text-white transition">Merch</a>
          <a href="#" className="hover:text-white transition">Tour</a>
          {/* Highlight Admin link for easy access */}
          <a href="/admin" className="text-kvred font-bold hover:text-white transition">Realest_ice</a>
        </div>
      </nav>
    </header>
  );
}
