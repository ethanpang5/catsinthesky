import React, { useEffect, useState } from "react";

function PhotoAlbum() {
	
	const [images, setImages] = useState([])

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
				console.log(images)
			})
	}, [])


	// var pics = []
	// fetch("https://jsonplaceholder.typicode.com/photos")
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		for (let i = 0; i < 24; i++) {
	// 			console.log(data[i])
	// 			pics.push(data[i]["url"]
	// 				// <img src={data[i]["url"]}></img>
	// 			)
	// 		}
	// 		console.log(pics)
	// 	}).then(
			
	// 	)

	return (
	  <div className="PhotoAlbum">
		  <h1>Photo Album</h1>
		  <div className="dashboard-grid">
			{images.map(url => {
				return <img src={url} className="album-photos"/>;
			})}
		  </div>
	  </div>
	);
  }


export default PhotoAlbum;