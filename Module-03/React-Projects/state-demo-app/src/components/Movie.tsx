import React, { useState } from 'react'

export default function Movie() {
    const [movie, setMovie] = useState({title: "The Lion King", year: 2022, rating: 6})
    const handleUpdateRating = (newRating: number) =>{
        setMovie((movie) => ({...movie, rating: newRating}))
    }
  return (
    <div>
        <h2>Movie Details</h2>
        <p>Title: {movie.title}</p>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <button onClick={()=> handleUpdateRating(9)}>Update Rating</button>
    </div>    
  )
}
