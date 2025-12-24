"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { Button } from "./ui/button";

const LeftSidebar = () => {


	return (
		<aside className="flex flex-col text-start w-full max-w-44 my-12 ">
			{/* Profile Section */}
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
				<h1 className="text-xl font-light mt-3">Adnan Muhammed</h1>
				<p className="text-gray-600 dark:text-muted-foreground">Software Developer</p>
			</div>

			{/* Social Links */}
			<div className="mb-5">
				<div className="space-y-2 text-gray-900 dark:text-gray-300 text-lg font-mono">
					{/* LinkedIn */}
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

					{/* GitHub */}
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

					{/* Twitter/X */}
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
				</div>
			</div>

			{/* Actions */}
			<div className="mt-auto">
				<ResumeDownloadButton />
			</div>
		</aside>
	);
};

export default LeftSidebar;
