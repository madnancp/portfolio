"use client";
import { ThemeToggleButton } from "./ThemeToggleButton";

const RightSidebar = () => {
	return (
		<aside className="flex flex-col text-start w-full max-w-44 font-mono ml-5 h-full justify-between py-8">


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
						<p>Updated on 2025 Dec</p>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default RightSidebar;
