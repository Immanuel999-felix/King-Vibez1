import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black border-b border-red-600">
        <h1 className="text-3xl font-extrabold text-red-600">KING VIBEZ</h1>

        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/about">About</Link>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col bg-black px-6 py-4 border-b border-red-600">
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </>
  );
    }
