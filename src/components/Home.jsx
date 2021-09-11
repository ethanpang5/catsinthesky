import React from "react";
import home_banner from '../images/home-banner.png'

function Home() {
  return (
    <div className="home">
      {/* <div className="home-banner"
            style={{backgroundImage: `url(${home_banner})`}}>
      </div> */}
      <img src={home_banner} className="home-banner"/>
      <div className="home-text">
        <h1>Cats in the Sky</h1>
        <h3>The only cat home in an airplane</h3>
      </div>
    </div>
  );
}

export default Home;