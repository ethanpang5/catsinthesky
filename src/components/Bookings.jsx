import React from "react";
import cat1 from '../images/catnip.png'
import cat2 from '../images/whisker.png'
import cat3 from '../images/thirsty.png'
import cat4 from '../images/kitty.png'
import Booking from './Booking'

function Bookings() {
	return (
		<div className="Bookings">

			{/* <div class="container-fliud">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<Booking
							catName="Catnip (Standard Visit)"
							catImage={cat1}
						/>
					</div>
					<div class="col-md-6 col-sm-6">
						<Booking
							catName="Whisker Wednesday"
							catImage={cat2}
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<Booking
							catName="Thirsty Purssdays"
							catImage={cat3}
						/>
					</div>
					<div class="col-md-6 col-sm-6">
						<Booking
							catName="Kitty Brunch"
							catImage={cat4}
						/>
					</div>
				</div>
			</div> */}

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