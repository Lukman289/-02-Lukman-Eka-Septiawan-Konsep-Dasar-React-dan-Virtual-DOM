# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Laporan Praktikum
|    |  Pemrograman Berbasis Framework 2024  |
| ------------- | ------------- |
| NIM | 2241720049 |
| Nama | Lukman Eka Septiawan |
| Kelas | TI-3A |

## Langkah-langkah Praktikum 
### 1. Persiapan Lingkungan

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt: 
```
node -v
npm -v
```
2. Buat direktori baru untuk proyek React Anda: 
```
mkdir praktikum-react
cd praktikum-react
```
3. Inisialisasi proyek React dengan menjalankan perintah berikut: 
```
npx create-react-app my-react-app
cd my-react-app
```
4. Jalankan aplikasi React dengan perintah: 
```
npm start
```
Aplikasi akan terbuka di browser pada alamat http://localhost:3000. 

### 2. Membuat Komponen React
1. Buka file src/App.js di text editor Anda. 
2. Ganti kode di dalamnya dengan kode berikut untuk membuat komponen sederhana: 
~~~javascript
import React from 'react';

// Komponen Header
function Header() {
    return (
        <header>
            <h1>Aplikasi React Saya</h1>
        </header>
    );
}

// Komponen Main
function Main() {
    return (
        <main>
            <h2>Selamat datang di Aplikasi React Saya</h2>
            <p>Ini adalah area konten utama</p>
        </main>
    );
}

// Komponen Footer
function Footer() {
    return (
        <footer>
            <p>$copy; 2025 Aplikasi React Saya</p>
        </footer>
    );
}

// Komponen App yang menggunakan Header, Main, dan Footer
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
~~~
3. Simpan file dan lihat perubahan di browser. Anda akan melihat tampilan sederhana dengan header, konten utama, dan footer. 

![Image Practicum 1](public\img\p2-3.png)

### 3. Menggunakan JSX untuk Membuat Komponen Dinamis
1. Buat file baru di direktori src dengan nama Counter.js. 
2. Tambahkan kode berikut untuk membuat komponen Counter yang dinamis: 
~~~javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState[0];

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Hitungan: {count}</h1>
            <button onClick={handleClicl}>Tambah</button>
        </div>
    )
}

export default Counter;
~~~
3. Buka file src/App.js dan impor komponen Counter:

~~~javascript
import Counter from '.Counter';
~~~

4. Tambahkan komponen Counter ke dalam komponen App: 

~~~javascript
function App() {
    return (
        <div>
            <Header />
            <Main />
            <Counter />
            <Footer />
        </div>
    );
}
~~~

5. Simpan file dan lihat perubahan di browser. Anda akan melihat tombol "Tambah" yang dapat meningkatkan hitungan saat diklik. 

![Image for Practicum 1](public\img\p3-5.png)

### 4. Menggunakan Props untuk Mengirim Data
1. Buat file baru di direktori src dengan nama Greeting.js. 
2. Tambahkan kode berikut untuk membuat komponen Greeting yang menerima props: 

~~~javascript
function Greeting(props) {
    return <h1>Halo, {props,name}</h1>;
}

export default Greeting;
~~~

3. Buka file src/App.js dan impor komponen Greeting:

~~~javascript
import Greeting from './Greeting';
~~~

4. Tambahkan komponen Greeting ke dalam komponen App dan kirim props name:

~~~js
function App() {
    return (
        <div>
            <Header />
            <Main />
            <Greeting name="Lukman" />
            <Counter />
            <Footer />
        </div>
    );
}
~~~

5. Simpan file dan lihat perubahan di browser. Anda akan melihat pesan "Halo, John!" yang ditampilkan oleh komponen Greeting. 

![Image for Practicum 4](public\img\p4-5.png)

### 5. Menggunakan State untuk Mengelola Data
1. Buka file src/App.js dan tambahkan kode berikut untuk membuat komponen yang mengelola state:

~~~js
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
~~~

2. Tambahkan komponen Example ke dalam komponen App: 

~~~js
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
~~~

3. Simpan file dan lihat perubahan di browser. Anda akan melihat form input yang dapat mengupdate state dan menampilkan data yang dimasukkan.

![Image for Practicum 5](public\img\p5-3.png)

### Tugas 
1. Buat komponen baru bernama TodoList yang menampilkan daftar tugas (todo list). Gunakan state untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak. 
2. Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input. 
3. Implementasikan fitur untuk menghapus tugas dari daftar. 

![Image for Task](public\img\task.png)