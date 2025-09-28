import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Separator } from "./ui/separator";

const Sidebar = () => {
	return (

		<aside className="flex flex-col h-full text-start max-w-64">
			<div className="flex flex-col items-center w-full mb-6">
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

				<h1 className="text-lg font-semibold">Muhammed Adnan</h1>
				<p className="text-sm text-gray-600">Full Stack & AI/ML</p>
			</div>


			<div className="mb-4">
				<h2 className="text-xs font-semibold text-muted-foreground mb-1">
					About
				</h2>
				<p className="text-sm text-gray-500">
					Passionate about building ML and web apps. Loves Linux & productivity hacks.
				</p>
			</div>

			<div className="mb-4">
				<h2 className="text-xs font-semibold text-muted-foreground mb-1">
					Social
				</h2>
				<div className="space-y-2 text-gray-700 text-sm">
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


		</aside>

	);
};

export default Sidebar;
