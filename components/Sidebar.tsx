"use client"
import { AtSignIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
	return (
		<aside className="flex flex-col h-full w-full max-w-[220px] py-6">
			{/* Profile Section */}
			<div className="flex flex-col items-start w-full my-4">
				<h1 className="text-xl font-semibold mt-4 leading-tight">Adnan Muhammed</h1>
				<p className="text-base text-muted-foreground lowercase">
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
							LinkedIn
						</a>
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
							Github
						</a>
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
							X
						</a>
					</div>

					{/* Email */}
					<div className="flex items-center gap-2 group">
						<a
							href="mailto:etc.adnan@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:underline transition-all"
						>
							<AtSignIcon size={16} />
							Email
						</a>
					</div>
				</div>
			</div>
		</aside >
	);
};

export default Sidebar;
