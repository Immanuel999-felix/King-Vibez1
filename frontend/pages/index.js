import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl">
          <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-lg">
            KING VIBEZ
          </h1>
          <p className="mt-4 text-xl">Nigerian Rapper • Trap • Afro Fusion</p>

          <a
            href="/music"
            className="mt-6 inline-block px-10 py-3 bg-red-600 rounded-xl text-lg hover:bg-red-700"
          >
            Listen Now
          </a>
        </div>
      </section>
    </div>
  );
          }
