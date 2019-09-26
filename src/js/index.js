//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
//import { Card } from "./component/Card.js";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="second">{props.digitTwo % 10}</div>
			<div className="first">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitOne: PropType.number,
	digitTwo: PropType.number,
	digitThree: PropType.number,
	digitFour: PropType.number
};

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
/*ReactDOM.render(
	<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />,
	document.quertSelector("#myDiv")
);*/

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	//console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
