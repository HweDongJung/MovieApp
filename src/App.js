import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';

function App() {
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }


  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);
  return (
    <div>{loading ? <h1>Loading...</h1> : 
    <div>{
      movies.map(movie => <Movie coverImage={movie.medium_cover_image} title={movie.title} genres={movie.genres} summary={movie.summary}/>)
    }</div>
    
    }</div>
    
  );
}

export default App;
