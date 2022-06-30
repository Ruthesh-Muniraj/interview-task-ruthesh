import React from "react";
import styles from "../Style/MovieCard.module.css";
import playButton from "../assets/playbutton.png"
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movieData }) {
  const navigate = useNavigate();

  return (
    <div 
      className={styles.movie_card} 
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData.backdrop_path})`}}
      onClick={()=>{
        navigate('/individualPage', { state: { id: movieData.id} });
      }}
    >
      
      <div className={styles.title_card}>
        <div className={styles.title_container}>
          <p className={styles.movie_title}>{movieData.title}</p>
          <p>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#FFE234"/>
            </svg>
            &nbsp;
            <span className={styles.rating}>{movieData.vote_average} / 10</span> {/* Coun't able to find rating for 5 */}
          </p>
        </div>
        <img src={playButton} alt="play button" />
      </div>

    </div>
  );
}
