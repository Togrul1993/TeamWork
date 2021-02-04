import React, { useState } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import HomeBodyVacancy from './HomeBodyVacancy';
import FullTime from './FullTime';
import PartTime from './PartTime';
import Frilans from './Frilans';
import Tecrube from './Tecrube';

const VacancyPlan = () => {

	const [vacancy] = useState([
		{
			vacancyplan: "Vakansiyalar",
			eventKey: 0,
			vacancyplanbody: <HomeBodyVacancy />
		},
		{
			vacancyplan: "Full-time işlər",
			eventKey: 1,
			vacancyplanbody: <FullTime />
		},
		{
			vacancyplan: "Part-time işlər",
			eventKey: 2,
			vacancyplanbody: <PartTime />
		},
		{
			vacancyplan: "Frilans işlər",
			eventKey: 3,
			vacancyplanbody: <Frilans />
		},
		{
			vacancyplan: "Təcrübə Proqramı",
			eventKey: 4,
			vacancyplanbody: <Tecrube />
		}

	])

	return (
		<div className="container">
			<Accordion defaultActiveKey="0">
				<Card>


					<>
						<Card.Header className="d-flex flex-wrap justify-content-around" >
							{
								vacancy.map((vacancy, i) => (
									<Accordion.Toggle key={i} className="m-4" as={Button} variant="link" eventKey={vacancy.eventKey}>
										{vacancy.vacancyplan}
									</Accordion.Toggle>
								))
							}
						</Card.Header>

						{
							vacancy.map((vacancy, i) => (
								<Accordion.Collapse eventKey={vacancy.eventKey} key={i}>
									<Card.Body>{vacancy.vacancyplanbody}</Card.Body>
								</Accordion.Collapse>
							))
						}



					</>


				</Card>
			</Accordion>
		</div>
	)
}

export default VacancyPlan
