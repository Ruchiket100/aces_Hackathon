"use  client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
	const sections = [
		{
			title: "Introduction",
			content:
				"Welcome to our college! We are committed to excellence in education, fostering innovation, and nurturing talent for a better tomorrow.",
		},
		{
			title: "History",
			content:
				"Founded in 1995, our college has grown from a humble beginning to one of the top institutions in the region.",
		},
		{
			title: "Campus and Facilities",
			content:
				"Our campus is equipped with modern classrooms, advanced laboratories, a digital library, sports arenas, and student lounges.",
		},
		{
			title: "Faculty and Staff",
			content:
				"We boast a highly qualified faculty with experience in academia and industry, supported by dedicated administrative staff.",
		},
		{
			title: "Achievement and Ranking",
			content:
				"Ranked among the top 10 colleges in the state, we have received accolades for academic excellence and student satisfaction.",
		},
		{
			title: "Placement and Industry Tie-up",
			content:
				"We maintain strong partnerships with top companies to ensure excellent placement opportunities for our students.",
		},
		{
			title: "Contact Information",
			content:
				"Reach us at contact@ourcollege.edu or call +123-456-7890. Visit our campus at 123 Education Lane, Knowledge City.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
			<h1 className="text-5xl font-extrabold text-center text-purple-800 mb-12">
				About Our College
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{sections.map((section, index) => (
					<motion.div
						key={index}
						className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: index * 0.2,
							duration: 0.6,
							type: "spring",
						}}
					>
						<h2 className="text-2xl font-semibold text-purple-700 mb-4">
							{section.title}
						</h2>
						<p className="text-gray-700 text-sm leading-relaxed">
							{section.content}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}
