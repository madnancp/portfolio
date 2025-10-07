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
		<header className="w-full flex items-center px-6 py-4 bg-none backdrop-blur-3xl sticky top-0 z-50">
			<div></div>

			<div className="ml-auto flex items-center gap-6 text-muted-foreground">
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

				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
