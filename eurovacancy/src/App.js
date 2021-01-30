import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/Home'

const App = () => {
	return (
		<div>
			<Router>
				<Route exact="/" children={Home} />
			</Router>

		</div>
	)
}

export default App
