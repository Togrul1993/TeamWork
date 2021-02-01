import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home';
import Eror404 from './Components/Eror404';
import Advertising from './Components/Advertising ';
import Rules from './Components/Rules'

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/advertising" component={Advertising} />
					<Route path="/rules" component={Rules} />
					<Route path="*" component={Eror404} />
				</Switch>
			</Router>

		</>
	)
}

export default App
