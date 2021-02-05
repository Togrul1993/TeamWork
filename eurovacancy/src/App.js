import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home';
import Eror404 from './Components/Eror404';
import Advertising from './Components/Advertising ';
import Rules from './Components/Rules'
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Vacancy from './Components/Vacancy';
import VacancyDetail from './Components/VacancyDetail';
import About from './Components/About';
import AddCV from './Components/AddCv';
import BlogDetails from './Components/BlogDetails';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/advertising" component={Advertising} />
					<Route path="/vacancies" component={Vacancy} />
					<Route path="/about" component={About} />
					<Route path="/addcv" component={AddCV} />
					<Route path="/vacancy-detail" component={VacancyDetail} />
					<Route path="/rules" component={Rules} />
					<Route path="/contact" component={Contact} />
					<Route path="/blog" component={Blog} />
					<Route path="/blogdetails" component={BlogDetails} />
					<Route path="*" component={Eror404} />
					<Route path="/post" component={BlogDetails} />
				</Switch>
			</Router>

		</>
	)
}

export default App;
