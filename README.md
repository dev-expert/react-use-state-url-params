# react-use-state-url-params

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

```sh
yarn add react-use-state-url-params
```

## Demo
- https://codesandbox.io/s/long-pine-vfrs1


## Usage
```
import useStateWithUrlParams from '../../src'

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
```

## References
- https://developer.mozilla.org/en-US/docs/Web/API/URL
- https://reactjs.org/docs/hooks-custom.html
- https://github.com/dev-expert/react-use-state-url-params

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
