import React from "react";

// Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Main
function Main() {
  return (
    <main>
      <h1>Selamat databg du Aplikasi React Saya</h1>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2021 Aplikasi React Saya</p>
    </footer>
  );
}

// Komponen App
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;