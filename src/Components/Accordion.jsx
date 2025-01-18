import { useState } from "react";
import "../App.css";
import "./Accordion.css";

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const accordionData = [
		{
			id: 1,
			title: "Our Mission",
			content:
				"Improve any page of your site with confidence. See which parts of the page get ignored, and which elements drive sales and signups.",
			link: "#",
		},
		{
			id: 2,
			title: "Our Vision",
			content:
				"See exactly what your users see. Watch real user sessions to find and fix hidden friction and conversion blockers.",
			link: "#",
		},
		{
			id: 3,
			title: "Feedback",
			content:
				"Hear directly from your users as they experience your site. Find out what they love, and what’s driving them off your site. Make the changes that matter.",
			link: "#",
		},
		{
			id: 4,
			title: "Surveys",
			content:
				"Bring your customer voice to your decision-making. Validate your plans, measure customer satisfaction, and learn from every churn.",
			link: "#",
		},
		{
			id: 5,
			title: "Interviews",
			content:
				"Connect 1 to 1 with users to test hypotheses, prototypes, refine designs, and iterate on ideas faster.",
			link: "#",
		},
	];

	return (
		<div className="skew-bg-accordion relative bg-black px-4 md:px-28 flex flex-col items-center justify-between gap-8 pb-80">
			<div className="text-white">
				<h1 className="font-bold text-xl md:text-4xl">Phasellus a vitae iaculis magna.</h1>
				<h1 className="font-thin text-center text-lg">Phasellus a vitae iaculis magna.</h1>
			</div>
			<ul className="w-full flex flex-col gap-4">
				{accordionData.map((item, index) => (
					<li
						key={item.id}
						className={`border border-gray-400 rounded-lg bg-white shadow-md overflow-hidden 
							${openIndex === index ? "wobble" : ""
							}`}
					>
						<div
							className="flex items-center justify-between p-4 cursor-pointer"
							onClick={() => toggleAccordion(index)}
						>
							<div className="flex items-center gap-4">
								<h4 className="text-lg font-medium">{item.title}</h4>
							</div>
							<span className="text-2xl font-bold">
								{openIndex === index ? "-" : "+"}
							</span>
						</div>
						<div
							className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-screen p-4" : "max-h-0"
								}`}
						>
							<p className="text-gray-600 mb-4 text-sm leading-6">
								{item.content}
							</p>
							<a href={item.link} className="text-blue-500 hover:underline text-sm">
								Discover {item.title}
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Accordion;
