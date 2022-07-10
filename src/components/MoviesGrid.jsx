import MovieCard from './MovieCard.jsx'
import movies from './movies.json'
import styles from './MoviesGrid.module.css'

const MoviesGrid = () => {
    return(
        <ul className={styles.moviesGrid} >
            {movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} /> 

            ))}
        </ul>
    )
}

export default MoviesGrid