"use client";
import React from "react";
import Link from "next/link"; // Don't forget to import Link if you're using Next.js

const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(true);

	const menuItems = [
		{ label: "Student", href: "/admin/student", icon: "user" },
		{ label: "Member", href: "/admin/member", icon: "badge-check" }, // changed to valid FA icon
	];

	return (
		<div
			className={`flex flex-col h-screen w-[20%] p-8 bg-gray-200 top-0 left-0 transition-all ${
				isMenuOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			{menuItems.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className="flex items-center gap-3 text-xl hover:font-bold transition-all text-black py-2 px-4 rounded"
				>
					<i className={`fas fa-${item.icon} text-lg`} />
					{item.label}
				</Link>
			))}
		</div>
	);
};

export default Sidebar;
