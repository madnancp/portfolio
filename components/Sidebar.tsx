import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import DownloadButton from "./ResumeDownloadButton";

const Sidebar = () => {
	return (
		<aside className="flex flex-col h-full text-start w-full max-w-56 border-r pt-12">
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
				<p className="text-sm text-muted-foreground">Full Stack & AI/ML</p>
			</div>


			<div className="mb-4">
				<h2 className="text-xs font-semibold text-muted-foreground mb-1">
					Social
				</h2>
				<div className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
					{/* LinkedIn */}
					<div className="flex items-center gap-2">
						<FaLinkedin className="w-4 h-4 hover:text-blue-600" />
						<a
							href="https://linkedin.com/in/madnancp"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							in/madnancp
						</a>
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
