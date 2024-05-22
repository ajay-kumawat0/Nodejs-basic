import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
      <h1>React App</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke, index) =>(
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
