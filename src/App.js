import Food from './Food'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    await axios.get('https://yts.mx/api/v2/list_movies.json')
      .then(res => {
        console.log(res.data.data.movies)
        setMovies(res.data.data.movies)
        setIsLoading(false);
        console.log('movies: ', movies)
      })
  }

  useEffect(() => {
    console.log('did mount')
    getMovies();

  }, [])

  return (
    <>
      <h1>Favorite Foods</h1>
      <div>{isLoading ? 'Loading...': 'Completed'}</div>
      { movies.map(movie => {
        return (
          <Movie 
            id={movie.id} 
            title={movie.title} 
            year={movie.year} 
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        )
      })}
      
    </>
  );
}

export default App;
