import React from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import {useState} from "react";

function Example() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <p>{name} berumur {age} tahun dan emailnya adalah {email}</p>
    </div>
  )
}

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
      <h1>Selamat datang di Aplikasi React Saya</h1>
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
      <Greeting name="Lukman" />
      <Counter />
      <Example />
      <Footer />
    </div>
  );
}

export default App;