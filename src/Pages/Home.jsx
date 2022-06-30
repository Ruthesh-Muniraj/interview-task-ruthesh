import React, { Fragment, useState } from "react";
import NavBar from "../Components/NavBar";
import Trending from "../Components/Trending";
import SearchResult from "../Components/SearchResult";
import styles from "../Style/Home.module.css";

export default function Home() {
   const [serchresult, setSearchResult] = useState(null);
  return (
    <Fragment>
      <NavBar isSearch={true} setSearchResult={setSearchResult}/>
      <header className={styles.hero}></header>
      {serchresult&&<SearchResult  serchresult={serchresult}/>}
      <Trending />
    </Fragment>
  );
}
