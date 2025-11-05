import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"
import { AnimatePresence, motion } from "motion/react"

export function ThemeToggleButton() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<Tooltip>
			<TooltipTrigger asChild>

				<Button
					size="icon"
					variant="ghost"
					className="rounded-full text-black dark:text-white cursor-pointer transition-colors duration-500 relative"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				>
					<AnimatePresence mode="wait" initial={false}>
						{theme === "dark" ? (
							<motion.span
								key="sun"
								initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<Sun className="h-4 w-4" />
							</motion.span>
						) : (
							<motion.span
								key="moon"
								initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<Moon className="h-4 w-4" />
							</motion.span>
						)}
					</AnimatePresence>

					<span className="sr-only">Toggle theme</span>
				</Button>
			</TooltipTrigger>

			<TooltipContent>
				<p>Switch mood</p>

			</TooltipContent>

		</Tooltip>
	)
}
