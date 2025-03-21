import React from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import {useState} from "react";
import ToDoList from "./ToDoList";

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

// function ToDoList() {
//     const [todos, setTodos] = useState([]);
//     const [text, setText] = useState("");
    
//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     }
    
//     const handleAdd = () => {
//         setTodos([...todos, text]);
//         setText("");
//     }
    
//     const handleDelete = (index) => {
//         const newTodos = [...todos];
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//     }
    
//     return (
//         <div>
//         <input type="text" value={text} onChange={handleTextChange} />
//         <button onClick={handleAdd}>Add</button>
//         <ul>
//             {todos.map((todo, index) => (
//             <li key={index}>
//                 {todo}
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//             ))}
//         </ul>
//         </div>
//     );
// }

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
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;