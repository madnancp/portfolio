interface SectionTitleProps {
	title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="mb-8">
			<h2 className="text-xl font-semibold text-foreground">
				{title}
			</h2>
		</div>
	)
}
