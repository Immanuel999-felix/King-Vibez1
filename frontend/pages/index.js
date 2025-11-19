export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Poppins, sans-serif" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://i.ibb.co/3RKr0b4/music-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "60px", fontWeight: "900", color: "red", textShadow: "0 0 20px red" }}>
          KING VIBEZ
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", marginTop: "10px" }}>
          Official Website • Music • Videos • Merch
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            style={{
              backgroundColor: "red",
              color: "#000",
              padding: "12px 30px",
              border: "none",
              borderRadius: "5px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Listen Now
          </button>

          <button
            style={{
              backgroundColor: "#111",
              border: "2px solid red",
              color: "red",
              padding: "12px 30px",
              borderRadius: "5px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Watch Videos
          </button>
        </div>
      </div>

      <main style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>

        {/* MUSIC SECTION */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "35px", color: "red", marginBottom: "20px" }}>
            🔥 Music
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={card}>Song 1</div>
            <div style={card}>Song 2</div>
            <div style={card}>Song 3</div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "35px", color: "red", marginBottom: "20px" }}>
            🎬 Videos
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={card}>Video 1</div>
            <div style={card}>Video 2</div>
            <div style={card}>Video 3</div>
          </div>
        </section>

        {/* MERCH SECTION */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "35px", color: "red", marginBottom: "20px" }}>
            🛒 Merch
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={card}>T-Shirt</div>
            <div style={card}>Hoodie</div>
            <div style={card}>Cap</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "30px 0", backgroundColor: "#111", color: "#aaa" }}>
        © 2025 King Vibez • Built with ❤️ by The Realest_ice
      </footer>
    </div>
  );
}

// Reusable card styling
const card = {
  backgroundColor: "#111",
  border: "1px solid red",
  padding: "25px",
  borderRadius: "10px",
  flex: "1",
  minWidth: "200px",
  textAlign: "center",
  fontWeight: "600",
};
