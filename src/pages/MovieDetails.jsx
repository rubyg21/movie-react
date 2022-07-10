import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '../hooks/useQuery'
import { get } from '../utils/httpClient'
// import movie from './movie.json'
import styles from './MovieDetails.module.css'

function MovieDetails() {
  const {movieId} = useParams()
  //***** */
  const [isLoading, setIsLoading ] = useState(true) 

    //***** */
  console.log(movieId)
const [movie, setMovie] = useState(null)



//*********** */
useEffect(() =>{
  setIsLoading(true)

  get("/movie/" + movieId ).then(data =>{
    setMovie(data)
    setIsLoading(false)
  })
}, [movieId])

if(isLoading){
  return <Spinner />
}

// if (!movie){
//   return null
// }

//*********** */
    const imagUrl = 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
  return (
    <div className={styles.detailsContainer} >
        <img  className={`${styles.col} ${styles.movieImage}`}
           src={imagUrl} 
           alt={movie.title} />
        
        <div className={ `${styles.col} ${styles.movieDetails}`} >
            <p className={styles.firstItem} > <strong> Title: </strong> {movie.title} </p>
            <p> <strong> Geners: </strong> 
            {movie.genres.map(genres => genres.name).join(", ")} </p>
            <p> <strong> Description: </strong> {movie.overview} </p>
        </div>
        </div>
  )
}

export default MovieDetails