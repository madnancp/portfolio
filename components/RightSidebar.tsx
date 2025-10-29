"use client";
import { AtSignIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";

const RightSidebar = () => {
	const [activeSection, setActiveSection] = useState("");
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Calculate scroll progress
			const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
			if (scrollArea) {
				const scrollTop = scrollArea.scrollTop;
				const scrollHeight = scrollArea.scrollHeight - scrollArea.clientHeight;
				const progress = (scrollTop / scrollHeight) * 100;
				setScrollProgress(progress);
			}

			// Determine active section
			const sections = ["hero", "experience", "projects", "skills", "education"];
			const current = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 150 && rect.bottom >= 150;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
		scrollArea?.addEventListener('scroll', handleScroll);
		return () => scrollArea?.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const navItems = [
		{ id: "hero", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "education", label: "Education" },
	];

	return (
		<aside className="flex flex-col text-start w-full max-w-44 my-12 font-mono ml-5">
			{/* Progress Bar */}
			<div className="mb-6">
				<div className="h-0.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
					<div
						className="h-full bg-gray-900 dark:bg-gray-300 transition-all duration-200"
						style={{ width: `${scrollProgress}%` }}
					/>
				</div>
			</div>

			{/* Navigation */}
			<nav className="mb-8">
				<div className="space-y-1 text-sm">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`block w-full text-right py-1 transition-colors ${activeSection === item.id
								? 'text-dark dark:text-white font-bold'
								: 'text-muted-foreground hover:text-gray-700 dark:hover:text-gray-300'
								}`}
						>
							{activeSection === item.id && "→ "}
							{item.label}
						</button>
					))}
				</div>
			</nav>

			{/* Info Section */}
			<div className="mb-8 text-sm text-gray-900 dark:text-gray-300 space-y-2">
				<div className="flex items-center gap-2">
					<MapPinIcon size={14} />
					<span>India</span>
				</div>
				<div className="flex items-start">
					<span>
						For contact prefer{" "}
						<a
							href="mailto:your.email@example.com"
							className="underline text-white hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
						>
							Email
						</a>
						.
					</span>
				</div>
			</div>

			{/* Status */}
			<div className="mb-1">
				<div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
					<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
					<span>Open to work</span>
				</div>
			</div>

			{/* Footer Note */}
			<div className="mt-auto">
				<p className="text-xs text-muted-foreground">Last updated Nov, 2024</p>
			</div>
		</aside>
	);
};

export default RightSidebar;
