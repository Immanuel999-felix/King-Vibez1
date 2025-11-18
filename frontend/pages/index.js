export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", padding: "50px 0" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>King Vibez</h1>
        <p style={{ color: "#aaa", marginTop: "10px" }}>Official Music & Merch</p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", gap: "40px" }}>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Music</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Song 1</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Song 2</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Song 3</div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Videos</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Video 1</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Video 2</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Video 3</div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Merch</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>T-Shirt</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Hoodie</div>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px", flex: "1" }}>Cap</div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Tour Dates</h2>
          <ul style={{ listStyle: "none", padding: 0, gap: "10px" }}>
            <li style={{ backgroundColor: "#111", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>Dec 25, Lagos</li>
            <li style={{ backgroundColor: "#111", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>Jan 10, Abuja</li>
            <li style={{ backgroundColor: "#111", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>Feb 5, Port Harcourt</li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "30px 0", color: "#aaa" }}>
        © 2025 King Vibez. All rights reserved.
      </footer>
    </div>
  );
  }
