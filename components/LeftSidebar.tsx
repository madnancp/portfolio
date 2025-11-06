"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, Copy, Clock, MailIcon } from "lucide-react";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { useState } from "react";
import { Button } from "./ui/button";

const LeftSidebar = () => {
	const [copied, setCopied] = useState(false);
	const email = "etc.adnan@gmail.com";

	const copyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<aside className="flex flex-col text-start w-full max-w-44 my-12 border-r-2 border-r-text-muted-foreground">
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
				<h1 className="text-xl font-semibold mt-3">Adnan</h1>
				<p className="text-sm text-gray-600 dark:text-muted-foreground">Full Stack & AI/ML</p>
			</div>

			{/* Social Links */}
			<div className="mb-5">
				<div className="space-y-2 text-gray-900 dark:text-gray-300 text-base font-mono">
					{/* LinkedIn */}
					<div className="flex items-center gap-2 group">
						<a
							href="https://linkedin.com/in/madnancp"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:underline transition-all"
						>
							<FaLinkedin className="w-4 h-4 transition-all" />
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
							<FaGithub className="w-4 h-4" />
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
							<FaXTwitter className="w-4 h-4" />
							@madnancp
						</a>
						<span className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all duration-200">↗</span>
					</div>
				</div>
			</div>

			{/* Contact Info - Subtle */}
			<div className="mb-5 space-y-2.5 text-sm font-mono">
				{/* Email with Copy */}
				<Button
					onClick={copyEmail}
					variant={"secondary"}
					className="rounded-full p-6 px-3"
				>
					<span className="truncate text-xs">{email}</span>
					<div className="bg-primary rounded-full p-2 text-primary-foreground">
						<MailIcon className="w-4 h-4" />
					</div>
				</Button>

				{/* Timezone - Casual */}
				<div className="flex items-center gap-2 text-xs">
					<Clock className="w-3.5 h-3.5" />
					<span>IST (UTC+5:30)</span>
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
