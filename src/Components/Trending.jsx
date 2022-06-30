import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../Style/Trending.module.css";
import { mainAxios } from "../axios";

export default function Trending() {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `movie/popular?api_key=4d2be2025aa74f1d141939d335aa2cf1&language=en-US&page=${page}`,
    };
    mainAxios(config)
      .then((responce) => {
        setMovieList(responce.data.results);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <main className={styles.container}>
      <h2 className={styles.trending_heading}>Trending</h2>
      <div className={styles.movie_lists}>
        {movieList &&
          movieList.map((data, index) => {
            return <MovieCard movieData={data} key={index} />;
          })}
      </div>

      <ul className={styles.pagination}>

        <li className={styles.page_caret} 
          onClick={()=>{
            page === 1 ? setPage(6) : setPage(page - 1);
          }}
        >&lt;</li> 

        {[1, 2, 3, 4, 5, 6].map((pgNumer, index) => {
          return (
            <li
              className={`
                ${styles.page_number} 
                ${ page === pgNumer && styles.active }
              `}
              onClick={()=>setPage(pgNumer)}
              key={index}
            >
              {pgNumer}
            </li>
          );
        })}

        <li className={styles.page_caret}
          onClick={()=>{
            page === 6 ? setPage(1) : setPage(page + 1);
          }}
        >&gt;</li>

      </ul>
    </main>
  );
}
