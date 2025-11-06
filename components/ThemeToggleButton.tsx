import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function ThemeToggleButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<Button
			variant="secondary"
			className="rounded-full cursor-pointer transition-all duration-200 relative font-mono px-3"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			<div className="flex items-center gap-1.5">
				{/* Icon animation (rotating) */}
				<motion.div
					key={isDark ? "sun" : "moon"}
					initial={{ rotate: isDark ? -90 : 90, opacity: 0, scale: 0.8 }}
					animate={{ rotate: 0, opacity: 1, scale: 1 }}
					exit={{ rotate: isDark ? 90 : -90, opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.1, ease: "easeInOut" }}
				>
					{isDark ? (
						<Sun className="h-3.5 w-3.5" />
					) : (
						<Moon className="h-3.5 w-3.5" />
					)}
				</motion.div>

				{/* Text fade (smooth transition) */}
				<AnimatePresence mode="wait">
					<motion.span
						key={isDark ? "light-text" : "dark-text"}
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
						transition={{ duration: 0.1, ease: "easeOut" }}
						className="text-xs font-medium"
					>
						{isDark ? "Light" : "Dark"}
					</motion.span>
				</AnimatePresence>
			</div>

			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
