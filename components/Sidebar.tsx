"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Sidebar = () => {
	return (
		<aside className="flex flex-col h-full text-start w-full max-w-44 py-2 justify-between">
			{/* Profile Section */}
			<div>
				<div className="flex flex-col items-start w-full my-4">
					<div className="w-32 h-32 overflow-hidden rounded-full">
						<Image
							src="/adnan_img.png"
							alt="Profile photo"
							width={130}
							height={130}
							draggable={false}
							className="object-cover scale-140"
						/>
					</div>
					<h1 className="text-xl font-bold mt-3">Adnan Muhammed</h1>
					<p className="text-gray-600 dark:text-muted-foreground">Software Developer</p>
				</div>

				{/* Social Links */}
				<div className="mb-5">
					<div className="space-y-2 text-gray-900 dark:text-gray-300 text-lg font-mono">
						{/* LinkedIn */}
						<Tooltip>
							<TooltipTrigger>

								<div className="flex items-center gap-2 group">
									<a
										href="https://linkedin.com/in/madnancp"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline transition-all"
									>
										<FaLinkedin size={20} />
										in/madnancp
									</a>
									<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
								</div>
							</TooltipTrigger>

							<TooltipContent>
								LinkedIn
							</TooltipContent>
						</Tooltip>

						{/* GitHub */}
						<Tooltip>
							<TooltipTrigger>
								<div className="flex items-center gap-2 group">
									<a
										href="https://github.com/madnancp"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline transition-all"
									>
										<FaGithub size={20} />
										@madnancp
									</a>
									<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
								</div>
							</TooltipTrigger>

							<TooltipContent>Github</TooltipContent>
						</Tooltip>

						{/* Twitter/X */}
						<Tooltip>
							<TooltipTrigger>
								<div className="flex items-center gap-2 group">
									<a
										href="https://x.com/madnancp"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline transition-all"
									>
										<FaXTwitter size={20} />
										@madnancp
									</a>
									<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
								</div>
							</TooltipTrigger>

							<TooltipContent>X</TooltipContent>
						</Tooltip>
					</div>
				</div>

				{/* Actions */}
				<div className="mt-auto">
					<ResumeDownloadButton />
				</div>
			</div>

			<div>
				<div className="space-y-5 text-gray-900 dark:text-gray-300">


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

			</div>

		</aside>
	);
};

export default Sidebar;
