import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';
// import Requests from './Requests';
function Row({ title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]);

  const base_URL = "https://image.tmdb.org/t/p/original/";
  
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  // console.log(movies);

  //Section to filter japanese content
  // const[anime, setAnime] = useState([]);

  // useEffect(() => {
  //   async function fetchData(){
  //     const req = await axios.get(Requests.fetchAnimatedMovies);
  //     const vari = req.data.results.filter(function(mov){return mov.original_language==='ja'});
  //     setAnime(vari);
  //     const reqe = await axios.get(Requests.fetchAnimatedTv);
  //     const varia = req.data.results.filter(function(movi){return movi.original_language==='ja'});
  //     console.log(varia)
  //     // varia.map(function(series){console.log(series)})
  //     // setAnime(previous => [...previous,varia])
  //     return [req, reqe];
  //   }
  //   fetchData();
  // },[])

  // // console.log(anime)


  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row__posters">
      {movies.map((movie) => 
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (
              <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key = {movie.id}
                src={`${base_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} 
              alt = {movie.name}
              />  
        )
        
      )}

      </div>
    </div>
  );
}

export default Row;
