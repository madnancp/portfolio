"use client";

import { HouseIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname(); // to highlight current page

	return (

		<header className="w-full flex items-center px-6 py-4 bg-none backdrop-blur-3xl dark:bg-gray-900 sticky top-0 z-50">
			{/* Empty space on left if needed (logo or leave empty) */}
			<div></div>

			{/* Right-aligned nav + theme toggler */}
			<div className="ml-auto flex items-center gap-6 text-muted-foreground">
				{/* Home */}
				<Link href="/" className={`flex items-center gap-1 text-sm ${pathname === "/" && "text-black"}`}>
					Home
				</Link>

				{/* Projects */}
				<Link href="/projects" className={`text-sm ${pathname === "/projects" && "text-black p-2 bg-gray-400"}`}>
					Projects
				</Link>

				{/* Theme Toggler */}
				<SunIcon className="h-4 w-4 cursor-pointer" />
			</div>
		</header >

	);
};

export default Header;
