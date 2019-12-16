import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const {id} = useParams();

 
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(movie);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <div>
      <MovieCard key={movie.id} movie={movie} />
      <button onClick={()=>{
        saveMovie()
        }}>Save Movie</button>
    </div>
  );
}

export default Movie;



