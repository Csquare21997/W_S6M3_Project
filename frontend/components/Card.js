import React from 'react'
import Figure from './figure'

export default function Card ({ title, text, imageURL ,date }){
    return(
      <div className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure 
      imageURL = {imageURL}
      caption = {date}
      />
      
    </div>
    )
  }