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
			rules_cname: "",
			text: "Eurovacancy.az saytında göstərilən və Avropanın ayrı-ayrı ölkə və şəhərlərində təqdim olunan vakant işlər üçün işçi seçimi aşağıdakı qaydalar üzrə həyata keçirilir."
		},
		{
			number: 2,
			rules_cname: "",
			text: "Hər hansı vakansiya üçün müraciət etmiş şəxslər bu vakansiyada mövcud olan kuvota üzrə işçi seçimi, bu işə ən layiqli namizədlər arasından seçilərək aparılır."
		},
		{
			number: 3,
			rules_cname: "d-flex flex-column",
			text: "Mövcud olan vakansiyalara işçi yerləşdirilməsi bu vakansiya üzrə müraciət etmiş namizədlər tərəfindən təmin edilmiş aşağıdakı məlumatlar əsasında aparılır:",
			rules_3_1_n: "1. ",
			rules_3_2_n: "2. ",
			rules_3_3_n: "3. ",
			rules_3_4_n: "4. ",
			rules_3_5_n: "5. ",
			rules_3_1_r: "Düzgün formada təqdim edilmiş passport və digər şəxsiyyəti təstiq edən sənədlər;",
			rules_3_2_r: "İxtisaslaşma sənədləri və digər sertifikatlar;",
			rules_3_3_r: "İş təcrübəsi haqda detallı yazılı məlumat;",
			rules_3_4_r: "Ailə tərkibi haqqında, eyni zamanda birinci dərəcəli qohumları (ata,ana,bacı,qadaş,əmi,dayı) arasında məhkumluğun olub olmaması haqqında yazılı və imzalı məlumat;",
			rules_3_5_r: "Əlavə, zəruri məlumatlar;"
		},
		{
			number: 4,
			rules_cname: "",
			text: "Qeyd edək ki, Eurovacancy işə düzətmə şirkəti deyil, öz daxili qaydalarına və bağlanmış müqavilələrə əsasən işçiləri Avropada yerləşən portnyor zavod və fabriklərdə yerləşdirməyi öz öhtəsinə götürür."
		},
		{
			number: 5,
			rules_cname: "",
			text: "Bütün namizədlərdən rus və ya ukrayna dilini səlist bilmələri tələb olunur."
		},
		{
			number: 6,
			rules_cname: "",
			text: "Viza və sənədləşmə xərcləri və eyni zamanda işçi ilə əmək müqaviləsi bağlanmış şirkətin olduğu ölkəyə gediş ( uçuş ) xərcləri işçi tərəfindən qarşılanır."
		}
	])

	return (
		<>
			<div className="bg-light">
				<NavbarMobil />

				<Navbar />
				<Header />
				<Container className="rules-container">
					<h2>Ümumi qaydalar</h2>
					<hr className="border-dark" />
					{
						rules.map(item => (
							<div className="d-flex flex-row euro-rules-row">
								<span>{item.number}. </span>
								<div className="d-flex flex-column euro-rules">
									<p>{item.text}</p>
									<div className={item.rules_cname}>
										<p><span>{item.rules_3_1_n}</span>{item.rules_3_1_r}</p>
										<p><span>{item.rules_3_2_n}</span>{item.rules_3_2_r}</p>
										<p><span>{item.rules_3_3_n}</span>{item.rules_3_3_r}</p>
										<p><span>{item.rules_3_4_n}</span>{item.rules_3_4_r}</p>
										<p><span>{item.rules_3_5_n}</span>{item.rules_3_5_r}</p>
									</div>
								</div>
							</div>
						))
					}
					<h6>Saytda yerləşdirilən vakansiyalar və CV-lər üçün məsuliyyət elan yerləşdirən tərəf daşıyır.</h6>
				</Container>
				<Footer />
			</div>
		</>
	)
}

export default Rules
