import React from "react";

function Booking(props) {
	// props: catName, catImage
	return (
		<div className="Booking">
			<div className="booking-widget">
				<img src={props.catImage} />

				<div className="booking-footer">
					<p>{props.catName}</p>
					<button>
						<a href="https://www.google.com/" target="_blank">Book</a>
					</button>
				</div>
			</div>
		</div>
	);
}


export default Booking;