// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    const request = axios.get("https://api.quotable.io/random")
    request.then((res) => {
      setAuthor(res.data.author)
      setQuote(res.data.content)
    })
  }, [])

  return (
    <>
      <p><strong>Autor:</strong> {author}</p>
      <p><strong>Frase:</strong> <i>{quote}</i></p>
    </>
  )
}


export default App;
