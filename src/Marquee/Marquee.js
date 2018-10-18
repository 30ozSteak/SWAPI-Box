import React from "react";
import "./Marquee.css";
import Loading from "../Loading/Loading";

const Marquee = ({ films, getLocalStorage }) => {
  // if (true) {
  //   const films = getLocalStorage()
  //   console.log('this is films', films)
  // }

  try {
    let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return (
      <div onLoad={getLocalStorage({films})} className="marquee-block">
        <div className="marquee-literal">
          <div className="marquee-title-block">
            <h3 className="film-number">
              Episode: {films.results[randomnumber].episode_id}
            </h3>
            <h2 className="film-title">{films.results[randomnumber].title}</h2>
          </div>
          <p className="film-crawl">
            {films.results[randomnumber].opening_crawl}
          </p>
        </div>
      </div>
    );
  } catch (e) {
    console.log('ERROR', e)
    let data = getLocalStorage()
    console.log(data)
    return <Loading />;
  }
};

export default Marquee;
