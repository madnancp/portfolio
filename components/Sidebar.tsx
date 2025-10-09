import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import DownloadButton from "./ResumeDownloadButton";

const Sidebar = () => {
	return (
		<aside className="flex flex-col h-full text-start w-full max-w-56 border-r border-gray-400/50 pt-12">
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

				<h1 className="text-xl font-semibold">Adnan</h1>
				<p className="text-sm text-gray-600 dark:text-muted-foreground">Full Stack & AI/ML</p>
			</div>


			<div className="mb-4">
				<div className="space-y-2 text-gray-900 dark:text-gray-300 text-md font-mono">
					{/* LinkedIn */}

					<div className="flex items-center gap-2 group">
						<FaLinkedin className="w-4 h-4 group-hover:text-black transition-colors" />
						<a
							href="https://linkedin.com/in/madnancp"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 hover:underline transition-all"
						>
							in/madnancp
						</a>
						<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
					</div>


					{/* GitHub */}
					<div className="flex items-center gap-2">
						<FaGithub className="w-4 h-4 hover:text-none" />
						<a
							href="https://github.com/madnancp"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							@madnancp
						</a>
					</div>


					{/* Twitter/X */}
					<div className="flex items-center gap-2">
						<FaXTwitter className="w-4 h-4 hover:text-sky-500" />
						<a
							href="https://x.com/madnancp"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							@madnancp
						</a>
					</div>
				</div>
			</div>

			<div>
				<DownloadButton />
			</div>


		</aside>

	);
};

export default Sidebar;
