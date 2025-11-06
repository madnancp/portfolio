"use client";

import { useState } from "react";
import { DownloadIcon, Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"

const ResumeDownloadButton = () => {
	const [isDownloading, setIsDownloading] = useState<boolean>(false);

	const handleDownload = () => {
		setIsDownloading(true);

		const link = document.createElement("a");
		link.href = "/adnan_resume.pdf";
		link.download = "Adnan_Resume.pdf";
		link.click();

		setTimeout(() => {
			setIsDownloading(false);
		}, 1200);
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>

				<Button
					onClick={handleDownload}
					disabled={isDownloading}
					className="rounded-full hover:cursor-pointer flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-mono"
				>
					{isDownloading ? (
						<Loader className="h-3.5 w-3.5 animate-spin" />
					) : (
						<DownloadIcon className="h-3.5 w-3.5" />
					)}
					{isDownloading ? "" : "Resume"}
				</Button>
			</TooltipTrigger>

			<TooltipContent>
				<p>Download Resume</p>
			</TooltipContent>
		</Tooltip>
	);
};

export default ResumeDownloadButton;
