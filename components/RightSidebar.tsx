"use client";
import { Sparkles, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";

const RightSidebar = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
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
		scrollArea?.addEventListener("scroll", handleScroll);
		return () => scrollArea?.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const navItems = [
		{ id: "hero", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "education", label: "Education" },
	];

	return (
		<aside className="flex flex-col text-start w-full max-w-44 font-mono ml-5 h-full justify-between py-8">
			{/* Top Section - Navigation */}
			<div className="space-y-5 mt-6">
				<nav>
					<div className="space-y-1 text-sm">
						{navItems.map((item) => {
							const isActive = activeSection === item.id;
							return (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="relative flex items-center gap-2 w-full text-start py-1 pl-3 transition-colors"
								>
									<div
										className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full transition-all duration-300
                      ${isActive ? "bg-primary opacity-100" : "bg-primary/50 opacity-0"}`}
									/>
									<span
										className={`${isActive
											? "text-dark dark:text-white font-semibold"
											: "text-muted-foreground hover:text-gray-700 dark:hover:text-gray-300"
											}`}
									>
										{item.label}
									</span>
								</button>
							);
						})}
					</div>
				</nav>
			</div>

			{/* Bottom Section - Personality + Info */}
			<div className="space-y-5 text-gray-900 dark:text-gray-300">
				{/* Status Cards */}
				<div className="space-y-3">
					{/* Availability - Fun version */}
					<div className="flex items-center gap-2 text-sm">
						<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
						<span>Open to work</span>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-300 dark:border-gray-700" />

				{/* Meta Section */}
				<div className="space-y-3">
					{/* Theme Toggle */}
					<div className="flex items-center justify-start">
						<ThemeToggleButton />
					</div>

					{/* Footer Info */}
					<div className="space-y-1 text-xs px-1 text-muted-foreground">
						<p>Last updated Nov 2025</p>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default RightSidebar;
