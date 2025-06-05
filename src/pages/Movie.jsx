import React from 'react'
import { useLoaderData } from 'react-router';
import Card from '../components/UI/Card';

const Movie = () => {
  
  const moviesData = useLoaderData();
  
  return (
    <ul className="container grid grid-four--cols">
      {
        moviesData?.Search?.map((currMovie) => {
          return <Card key={currMovie?.imdbID} currMovie={currMovie} />
        })
      }
    </ul>
  )
}

export default Movie;