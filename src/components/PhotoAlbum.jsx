import React, { useEffect, useState } from "react";

function PhotoAlbum() {
	
	// hooks to change state of page as data loads in
	const [images, setImages] = useState([])
	const [isLoading, setLoading] = useState(true)

	// use fetch to retrieve data
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then(response => response.json())
			.then(data => {
				var temp = []
				for (let i = 0; i < 24; i++) {
					console.log(data[i]["url"])
					temp.push(data[i]["url"])
				}
				setImages(temp)
				setLoading(false)
			})
	}, [])

	return (
	  <div className="PhotoAlbum">
		  <h1>Photo Album</h1>
		  <div className="album-grid">
			  {/* Handle loading message */}
			  {isLoading ? (
				  <>
				  <p>Loading cute cat images</p>
				  </>
			  ) : (
				  <>
				{images.map(url => {
					return <img src={url} className="album-photos"/>;
				})}
				</>
			  )}
		  </div>
	  </div>
	);
  }


export default PhotoAlbum;