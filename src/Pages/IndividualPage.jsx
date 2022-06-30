import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mainAxios } from "../axios";
import NavBar from "../Components/NavBar";
import styles from "../Style/IndividualPage.module.css";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

export default function IndividualPage() {
  const { state } = useLocation();
  const { id } = state;

  const [movieDetail, setMovieDetail] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 960px)');
  

  useEffect(() => {
    const config = {
      method: "get",
      url: `movie/${id}?api_key=4d2be2025aa74f1d141939d335aa2cf1&language=en-US`,
    };
    mainAxios(config)
      .then((responce) => {
        setMovieDetail(responce.data);
      })
      .catch((error) => console.error(error));

    return () => {
      setMovieDetail(null);
    };
  }, []);

  return (
    <Fragment>
      <NavBar isSearch={false} />
      {
        isDesktop && movieDetail ? (
          <DesktopMovieDetail movieDetail={movieDetail}/>
        )
        :movieDetail&&
        (
          <MobileMovieDetail  movieDetail={movieDetail}/>
        )
      }
    </Fragment>
  );
}

export function DesktopMovieDetail({movieDetail}){

  return (
    <main
      className={styles.movie_detail}
      style={{backgroundImage: ` linear-gradient(100.14deg, #000000 1.7%, #000000 35.19%, rgba(0, 0, 0, 0) 95.1%), url(https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path})`}}
    >
      <Link
        className={styles.back_button}
        to="/"
      >&larr;</Link>
      <div className={styles.details_container}>
        <h1 className={styles.movie_title}>{movieDetail.original_title}</h1>
        <p>Rating: {movieDetail.vote_average}/10</p>
        <p className={styles.description}>{movieDetail.overview}</p>
        <div className={styles.date_n_lang_div}>
          <p>Release Date</p>
          <p>{movieDetail.release_date.split("-")[0]}</p>
          <p>Original Language</p>
          <p>{movieDetail.spoken_languages.map((lang, index)=>{
            return <span key={index}>{(index ? ', ' : '') + lang.english_name}</span>
          })}</p>
        </div>
      </div>
    </main>
  )
  
}

export function MobileMovieDetail({movieDetail}){
  return (
    <main>
      <div 
        className={styles.banner_container}
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path})`}}
      >
        <Link
          className={styles.back_button}
          to="/"
        >&larr;</Link>
      </div>
      <div className={styles.details_container_mobile}>
        <h1 className={styles.movie_title}>{movieDetail.original_title}</h1>
        <p>Rating: {movieDetail.vote_average}/10</p>
        <p className={styles.description}>{movieDetail.overview}</p>
        <div className={styles.date_n_lang_div}>
          <p>Release Date</p>
          <p>{movieDetail.release_date.split("-")[0]}</p>
          <p>Original Language</p>
          <p>{movieDetail.spoken_languages.map((lang, index)=>{
            return <span key={index}>{(index ? ', ' : '') + lang.english_name}</span>
          })}</p>
        </div>
      </div>
    </main>
  )
}
