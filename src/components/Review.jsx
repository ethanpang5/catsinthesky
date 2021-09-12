import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// https://material-ui.com/components/accordion/
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

function Review(props) {
	// props: username, date, title, body
	const classes = useStyles();
	return (
		<div className="Review">
			<div className="review-widget">
				<div className={classes.root}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography className={classes.heading}>
								<div>
									Posted by <b>{props.username}</b>
								</div>
								<div>
									{props.date}
								</div>
								<div>
									<b>{props.title}</b>
								</div>
								</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								{props.body}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
}


export default Review;