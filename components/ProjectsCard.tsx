import { Card } from "./ui/card";

interface ProjectCardProps {
	title: string;
	description: string;
	tech: string[];
	github: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	tech,
	github,
}) => {
	return (
		<Card className="p-6 border border-border/50 rounded-lg bg-transparent shadow-none">
			<div className="space-y-4">
				{/* Title */}
				<h3 className="text-lg font-semibold leading-tight">
					{title}
				</h3>

				{/* Description */}
				<p className="text-sm text-muted-foreground leading-relaxed">
					{description}
				</p>

				{/* Tech stack */}
				<div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
					{tech.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>

				{/* Link */}
				<div>
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 text-sm hover:underline"
					>
						[code]
					</a>
				</div>
			</div>
		</Card>
	);
};
