"use client";

import { useState } from "react";
import { DownloadIcon, Loader } from "lucide-react";
import { Button } from "./ui/button";

const DownloadButton = () => {
	const [isDownloading, setIsDownloading] = useState<boolean>(false);

	const handleDownload = () => {
		setIsDownloading(true);

		// Create the download link
		const link = document.createElement("a");
		link.href = "/adnan_resume.pdf";
		link.download = "Adnan_Resume.pdf";
		link.click();

		// Simulate small delay (UX feedback)
		setTimeout(() => {
			setIsDownloading(false);
		}, 1200);
	};

	return (
		<Button
			onClick={handleDownload}
			disabled={isDownloading}
			className="rounded-full hover:cursor-pointer flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-mono"
		>
			{isDownloading ? (
				<Loader className="h-4 w-4 animate-spin" />
			) : (
				<DownloadIcon className="h-4 w-4" />
			)}
			{isDownloading ? "" : "Resume"}
		</Button>
	);
};

export default DownloadButton;
