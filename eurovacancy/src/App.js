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

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/advertising" component={Advertising} />
					<Route path="/vacancies" exact component={Vacancy} />
					<Route path="/about" exact component={About} />
					<Route path="/addcv" exact component={AddCV} />
					<Route path="/vacancies/:vacancy-detail" component={VacancyDetail} />
					<Route path="/rules" component={Rules} />
					<Route path="/contact" component={Contact} />
					<Route path="/blog" component={Blog} />
					<Route path="*" component={Eror404} />

				</Switch>
			</Router>

		</>
	)
}

export default App;
