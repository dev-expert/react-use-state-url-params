import { useState } from 'react'

function useStateWithUrlParams(initialState, urlParam) {
	if (process.browser) {
		let params = new URL(window.location.toString()).searchParams;
		if (params.get(urlParam))
			initialState = JSON.parse(decodeURI(params.get(urlParam)));
		const [myState, setMyState] = useState(initialState);

		const setSearchState = (newStateCreator) => {
			let newState = null;
			if (newStateCreator && {}.toString.call(newStateCreator) === '[object Function]') {
				newState = newStateCreator(myState);
			} else {
				newState = newStateCreator;
			}
			let params = new URL(window.location.toString()).searchParams;
			params.set(urlParam, JSON.stringify(newState));
			const stateString = '?' + params.toString();
			window.history.replaceState(null, null, stateString);
			setMyState(newState);
		};

		return [myState, setSearchState]
	}
}

export default useStateWithUrlParams;