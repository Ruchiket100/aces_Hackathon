"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = [
		{ label: "About Us", href: "/about" },
		{ label: "Contact", href: "/contact" },
		{ label: "For Admin", href: "/login" },
	];
	return (
		<div className="text-black">
			<div
				className={`flex flex-col absolute h-full w-[300px] p-8 bg-gray-200 top-0 right-0 transition-all ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					onClick={() => {
						setIsMenuOpen(false);
					}}
					className="mb-4 ml-auto aspect-square h-[40px] w-[40px] cursor-pointer flex items-center justify-center text-center rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-all"
				>
					<i className="fas fa-times text-xl text-black" />
				</button>
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className="text-xl hover:font-bold transition-all text-black py-2 px-4 rounded"
					>
						{item.label}
					</Link>
				))}
			</div>
			<div className="flex items-center justify-between p-4 px-8">
				<img src="/logo.png" className="w-30 aspect-square " />
				<div>
					<button
						onClick={() => setIsMenuOpen(true)}
						className="aspect-square py-5 cursor-pointer px-6 flex items-center justify-center text-center rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-all"
					>
						<i className="fas fa-bars text-xl text-black" />
					</button>
				</div>
			</div>
			{/* Section 1 - Header */}
			<motion.section className=" h-[400px] flex flex-col gap-5 items-center justify-center z-10">
				<motion.img
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					src="/logo.png"
					className="w-80 aspect-square"
				/>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="text-7xl font-bold text-black font-[family-name:var(--font-dm)]"
				>
					Welecome to TSSM
				</motion.h1>
			</motion.section>
		</div>
	);
}
