import React from "react";
import "./App.css";
import useStateWithUrlParams  from "use-url-search-params";

const Demo = (props) => {
	const [divColor, setDivColor] = useStateWithUrlParams('yellow', 'c');

	const getRandomClr = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		return "#" + randomColor;
	}

	return <div>
		<h1>react-use-state-url-params Demo</h1>
		<div>
			<div
				onClick={() => {
					setDivColor(getRandomClr());
				}}
				style={{
					width: '400px',
					height: '400px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontWeight: 'bold',
					fontSize: 'larger',
					backgroundColor: divColor
				}}>
				Click here to change the div color.
				</div>

		</div>
		<h3>Color value will be retained even on page refresh as state is synced with the URL params.</h3>
	</div>

}
export default App;
