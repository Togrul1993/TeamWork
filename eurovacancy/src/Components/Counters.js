import React, { useState } from 'react'

import CountUp from 'react-countup';
import '../Asests/Counters.scss';

const Counters = () => {

	const [count] = useState([
		{
			euro_counters_items: "euro-counters-items",
			euro_counters_item: "euro-counters-item",
			countup: "countup",
			end: 2500,
			fa_plus: "fa fa-plus",
			text: "Jobs Available"
		},
		{
			euro_counters_items: "euro-counters-items",
			euro_counters_item: "euro-counters-item",
			countup: "countup",
			end: 3500,
			fa_plus: "fa fa-plus",
			text: "Members"
		},
		{
			euro_counters_items: "euro-counters-items",
			euro_counters_item: "euro-counters-item",
			countup: "countup",
			end: 4500,
			fa_plus: "fa fa-plus",
			text: "Resumes"
		},
		{
			euro_counters_items: "euro-counters-items",
			euro_counters_item: "euro-counters-item",
			countup: "countup",
			end: 10500,
			fa_plus: "fa fa-plus",
			text: "Company"
		}
	])


	return (
		<>
			<div className="euro-counters">
				<div className="container pt-0 pb-0 ">
					<div className="row">
						{
							count.map((count, i) => (
								<div className="col-lg-3 counters-items" key={i}>
									<div className={count.euro_counters_item}>
										<CountUp end={count.end} className={count.countup} />
										<i className={count.fa_plus} aria-hidden="true"></i>
									</div>
									<p className="count-text">{count.text}</p>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Counters
