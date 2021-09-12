import React from "react";
import cat1 from '../images/catnip.png'
import cat2 from '../images/whisker.png'
import cat3 from '../images/thirsty.png'
import cat4 from '../images/kitty.png'
import Booking from './Booking'

function Bookings() {
	return (
		<div className="Bookings">
			<div className="dashboard-grid">
				<Booking
					catName="Catnip (Standard Visit)"
					catImage={cat1}
				/>
				<Booking
					catName="Whisker Wednesday"
					catImage={cat2}
				/>
				<Booking
					catName="Thirsty Purssdays"
					catImage={cat3}
				/>
				<Booking
					catName="Kitty Brunch"
					catImage={cat4}
				/>
			</div>
		</div>
	);
}


export default Bookings;