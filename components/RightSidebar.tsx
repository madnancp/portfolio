"use client";
import { MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";

const RightSidebar = () => {
	const [activeSection, setActiveSection] = useState("");
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
			if (scrollArea) {
				const scrollTop = scrollArea.scrollTop;
				const scrollHeight = scrollArea.scrollHeight - scrollArea.clientHeight;
				const progress = (scrollTop / scrollHeight) * 100;
				setScrollProgress(progress);
			}

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
			{/* Top Section */}
			<div>
				{/* Progress Bar */}
				<div className="mb-3">
					<div className="h-0.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
						<div
							className="h-full bg-gray-900 dark:bg-gray-300 transition-all duration-200"
							style={{ width: `${scrollProgress}%` }}
						/>
					</div>
				</div>

				{/* Navigation */}
				<nav className="mb-6">
					<div className="space-y-1 text-sm">
						{navItems.map((item) => {
							const isActive = activeSection === item.id;
							return (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`relative flex items-center gap-2 w-full text-start py-1 pl-3 transition-colors`}
								>
									{/* Left bar indicator */}
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

			{/* Bottom Section */}
			<div className="space-y-5">
				{/* Location + Status */}
				<div className="space-y-2 text-sm text-gray-900 dark:text-gray-300">
					<div className="flex items-center gap-2">
						<MapPinIcon size={14} />
						<span>India</span>
					</div>

					<div className="flex items-center gap-2 text-sm">
						<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
						<span>Open to work</span>
					</div>
				</div>

				{/* Theme toggle */}
				<div className="pt-2 border-t border-gray-200 dark:border-gray-800">
					<ThemeToggleButton />

					{/* Footer Note */}
					<p className="text-xs text-muted-foreground">Last updated Nov, 2025</p>
				</div>
			</div>
		</aside>
	);
};

export default RightSidebar;
