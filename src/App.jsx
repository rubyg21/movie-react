// import './App.css'
import MoviesGrid from './components/MoviesGrid'
import movies from './components/movies.json'
import styles from './App.module.css'
import MovieDetails from './pages/MovieDetails'


import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandinPage from './pages/LandinPage';


console.log(movies);

function App() {

  return (
    <div>
      <header>
          
          <nav>
          <Link to='/'> <h1 className={styles.title}> Movies </h1> </Link>   
          {/* <Link to='/movie'>  </Link>  */}
          </nav>     

      </header>   

      <main>   

      <Routes>
        <Route path='/' element={<LandinPage />} />
        <Route exact path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    
      </main>
    </div>
)
}

export default App
//  <MoviesGrid />