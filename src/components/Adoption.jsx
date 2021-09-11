import React from "react";
import data from '../Data.json'
import Review from './Review'

function Adoption() {

	var reviewData = []
	// Parse the data json file
	function getReviews() {
		let lst = data["data"]
		for (let i = 0; i < lst.length; i++) {
			let d = lst[i]
			console.log(d)
			const username = d["postedBy"]
			const date = d["createdAt"]
			const title = d["title"]
			const body = d["body"]
			// Generate a Review component with the data and store in an array
			reviewData.push(<Review username={username} 
									date={date}
									title={title}
									body={body}>
							</Review>)
		}
	}
	
	getReviews()

	return (
		<div className="Adoption">
			<div class="row">
				<div class="column adoption-left-column">
					<div class="adoption-text">
						<h1>
							How to adopt a cat
						</h1>
						<p>
							Cats in the Sky is home for up to 20 cats. Our staff cares for the kitties day and night, and they stay with us until they find their Forever Homes. Since we opened in 2016, we have found homes for hundreds of cats.
						</p>
						<p>
							All of our cats are adoptable and most were pulled from the Animal Care & Control's "at-risk" list by our partner, Anjellicle Cats Rescue.
						</p>
						<p>
							If you're interested in adopting a cat, please email us or talk to our staff during your visit and we will help you through the process.
						</p>
					</div>

				</div>
				<div class="column adoption-right-column">
					<h1>Reviews</h1>
					<div className="reviews-scroll">
						{/* Plop in the array of Reviews into a scrolling section */}
						{reviewData}
					</div>
					
				</div>
			</div>
		</div>
	);
}


export default Adoption;