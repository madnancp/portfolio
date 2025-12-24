interface SectionTitleProps {
	title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="flex items-center gap-3 mb-6">
			<div className="h-6 w-1 bg-black dark:bg-white" />
			<h6 className="tracking-wider font-medium">
				{title}
			</h6>
		</div>
	)
}
