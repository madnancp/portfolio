interface SectionTitleProps {
	title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="flex items-center gap-3 mb-6">
			<h2 className="text-sm font-medium tracking-wide text-muted-foreground">
				{title}
			</h2>
		</div>
	)
}
