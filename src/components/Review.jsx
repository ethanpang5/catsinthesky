import React from "react";

function Review(props) {
	// props: username, date, text
	return (
		<div className="Review">
			<div className="review-widget">
				<div className="review-header">
					<div>Post by {props.username}</div>
					<div>{props.date}</div>
				</div>
				<p>{props.text}</p>
			</div>
		</div>
	);
}


export default Review;