import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home';
import Eror404 from './Components/Eror404';
import Advertising from './Components/Advertising ';
import Rules from './Components/Rules'
import Header from './Components/Header';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="#header" component={Header} />
					<Route path="/advertising" component={Advertising} />
					<Route path="/rules" component={Rules} />
					<Route path="*" component={Eror404} />
					<Route path="/contact" component={Contact} />
					<Route path="/blog" component={Blog} />
				</Switch>
			</Router>

		</>
	)
}

export default App
