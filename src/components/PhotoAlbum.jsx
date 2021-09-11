import React from "react";
import Image from "react-bootstrap/Image"

function PhotoAlbum() {
	var images = []
	fetch("https://jsonplaceholder.typicode.com/photos")
		.then(response => response.json())
		.then(data => {
			for (let i = 0; i < 24; i++) {
				console.log(data[i])
				images.push(data[i]["url"]
					// <img src={data[i]["url"]}></img>
				)
			}
			console.log(images)
		}).then(
			
		)

	return (
	  <div className="PhotoAlbum">
		  <h1>Photo Album</h1>
		  <div className="dashboard-grid">
			{images.map(url => {
				return <img src={url}/>;
			})}
		  </div>
		  
	  </div>
	);
  }


export default PhotoAlbum;