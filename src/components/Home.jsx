import React from "react";
import home_banner from '../images/home-banner.png'

function Home() {
  return (
    <div className="home">
      <div className="home-banner"
            style={{backgroundImage: `url(${home_banner})`}}>
      </div>
      <div className="home-text">
        <h1>Cats in the Sky</h1>
        <h3>The only cat home in an airplane</h3>
      </div>
      
      {/* <div class="container">
        <div className="home_banner"
            style={{backgroundImage: `url(${home_banner})`}}
        >
        </div>
      </div> */}
    </div>
  );
}

export default Home;