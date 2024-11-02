import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './Card'

const api_key = 'XJedxnDlFyYCjioz4CNA5riOHMCzZPdQmRr1PLl1'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          setApod(res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    

    }
    fetchPhoto()

  }, [])
  if (!apod) return 'Fetching Photo of the Day...'


  return (
    <section>
      <Card
        title={apod.title}
        text={apod.description}
        imageURL={apod.url}
        date={apod.date}

      />
    </section>
  )
}

export default App
