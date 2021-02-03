import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import NavbarMobil from './NavbarMobil'

const Rules = () => {
	const [rules] = useState([
		{
			number: 1,
			text: "Eurovacancy.az saytında göstərilən və Avropanın ayrı-ayrı ölkə və şəhərlərində təqdim olunan vakant işlər üçün işçi seçimi aşağıdakı qaydalar üzrə həyata keçirilir."
		},
		{
			number: 2,
			text: "Hər hansı vakansiya üçün müraciət etmiş şəxslər bu vakansiyada mövcud olan kuvota üzrə işçi seçimi, bu işə ən layiqli namizədlər arasından seçilərək aparılır."
		},
		{
			number: 3,
			text: "Mövcud olan vakansiyalara işçi yerləşdirilməsi bu vakansiya üzrə müraciət etmiş namizədlər tərəfindən təmin edilmiş aşağıdakı məlumatlar əsasında aparılır:",

		},
		{
			number: 4,
			text: "Qeyd edək ki, Eurovacancy işə düzətmə şirkəti deyil, öz daxili qaydalarına və bağlanmış müqavilələrə əsasən işçiləri Avropada yerləşən portnyor zavod və fabriklərdə yerləşdirməyi öz öhtəsinə götürür."
		},
		{
			number: 5,
			text: "Bütün namizədlərdən rus və ya ukrayna dilini səlist bilmələri tələb olunur."
		},
		{
			number: 6,
			text: "Viza və sənədləşmə xərcləri və eyni zamanda işçi ilə əmək müqaviləsi bağlanmış şirkətin olduğu ölkəyə gediş ( uçuş ) xərcləri işçi tərəfindən qarşılanır."
		}
	])
	return (
		<>
			<NavbarMobil />

			<Navbar />
			<Header />
			<Container>
				<h2>Ümumi qaydalar</h2>
				{
					rules.map(item => (
						<div className="d-flex flex-row">
							<span>{item.number}. </span><p>{item.text}</p>
						</div>
					))
				}
				<h6>Saytda yerləşdirilən vakansiyalar və CV-lər üçün məsuliyyət elan yerləşdirən tərəf daşıyır.</h6>
			</Container>
			<Footer />
		</>
	)
}

export default Rules
