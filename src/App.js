import './App.css';
import styled from "styled-components"

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
    <MainContainer>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Quote:</strong> <i>{quote}</i></p>
    </MainContainer>
  )
}

const MainContainer = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column-reverse;
background-color: #0F0F0F;

p{
  font-size:25px;
  font-style:italic;
  color:#ffffff;
}
strong{
  color:yellow;
}
`



export default App;
