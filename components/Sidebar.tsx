"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
	return (
		<aside className="flex flex-col h-full w-full max-w-[220px] py-6 justify-between border-r border-border/40">
			{/* Profile Section */}
			<div>
				<div className="flex flex-col items-start w-full my-4">
					<div className="w-28 h-28 overflow-hidden rounded-full">
						<Image
							src="/121A8516.jpg"
							alt="Profile photo"
							width={150}
							height={150}
							draggable={false}
							className="object-cover"
						/>
					</div>
					<h1 className="text-base font-semibold mt-4 leading-tight">Adnan Muhammed</h1>
					<p className="text-sm text-muted-foreground">
						Software Developer
					</p>
				</div>

				{/* Social Links */}
				<div className="mb-5">
					<div className="space-y-3 text-gray-900 text-md font-mono">
						{/* LinkedIn */}
						<div className="flex items-center gap-2 group">
							<a
								href="https://linkedin.com/in/madnancp"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:underline transition-all"
							>
								<FaLinkedin size={16} />
								in/madnancp
							</a>
							<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
						</div>

						{/* GitHub */}
						<div className="flex items-center gap-2 group">
							<a
								href="https://github.com/madnancp"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:underline transition-all"
							>
								<FaGithub size={16} />
								@madnancp
							</a>
							<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
						</div>

						{/* Twitter/X */}
						<div className="flex items-center gap-2 group">
							<a
								href="https://x.com/madnancp"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:underline transition-all"
							>
								<FaXTwitter size={16} />
								@madnancp
							</a>
							<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
						</div>
					</div>
				</div>

			</div >

			<div>
				<div className="space-y-5 text-gray-900 dark:text-gray-300">


					{/* Meta Section */}
					<div className="space-y-3">
						{/* Footer Info */}
						<p className="text-xs text-muted-foreground/70">
							+ Updated on Jan 2026
						</p>
					</div>
				</div>

			</div>

		</aside >
	);
};

export default Sidebar;
