import React, { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import styles from "../Style/Trending.module.css";
import { mainAxios } from '../axios';

export default function SearchResult({serchresult}) {
    const [movieList, setMovieList] = useState([]);
  
    useEffect(() => {
      const config = {
        method: "get",
        url: `search/movie?api_key=4d2be2025aa74f1d141939d335aa2cf1&language=en-US&query=${serchresult}&page=1&include_adult=false`,
      };
      mainAxios(config)
        .then((responce) => {
            setMovieList(responce.data.results);
        })
        .catch((error) => console.error(error));
    }, [serchresult]);
  return (
    <main className={styles.container}>
      <h2 className={styles.trending_heading}>Search Result</h2>
      <div className={styles.movie_lists}>
        {movieList &&
          movieList.map((data, index) => {
            return <MovieCard movieData={data} key={index} />;
          })}
      </div>
    </main>
  )
}
