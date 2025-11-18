export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kvred to-kvblack flex items-center justify-center text-white font-bold">
            KV
          </div>
          <div>
            <h1 className="text-lg font-semibold">King Vibez</h1>
            <p className="text-xs text-zinc-400">Official</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="text-sm hover:text-kvgold transition">Music</a>
          <a className="text-sm hover:text-kvgold transition">Videos</a>
          <a className="text-sm hover:text-kvgold transition">Merch</a>
          <a className="text-sm hover:text-kvgold transition">Tour</a>
          <a href="/admin/login" className="text-sm px-3 py-1 border border-zinc-800 rounded-md hover:bg-kvred/10">Admin</a>
        </nav>
      </div>
    </header>
  );
    }
