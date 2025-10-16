"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggleButton";
import { cn } from "@/lib/utils";

const Header = () => {
	const pathname = usePathname();

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
	];

	return (
		<header className="w-full sticky top-0 z-50 bg-background py-6 px-4 font-sans backdrop-blur-sm transition-shadow duration-300">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				{/* Left Spacer (optional if you want perfect centering) */}
				<div className="w-6" />

				{/* Center Nav */}
				<nav className="flex items-center gap-6 text-muted-foreground justify-center flex-1">
					{links.map((link) => {
						const isActive = pathname === link.href;

						return (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"relative text-sm font-medium transition-colors duration-200",
									"hover:text-black dark:hover:text-white",
									"after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out after:origin-left",
									isActive
										? "text-black dark:text-white after:w-full"
										: "after:w-0 hover:after:w-full"
								)}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>

				{/* Right Theme Toggle */}
				<div className="flex items-center justify-end w-6">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
