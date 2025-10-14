interface SectionTitleProps {
	title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="flex items-center gap-3 mb-6">
			<div className="h-2 w-2 bg-black dark:bg-white rounded-full" />
			<h6 className="tracking-wider font-medium font-mono">
				{title}
			</h6>
		</div>
	)
}
