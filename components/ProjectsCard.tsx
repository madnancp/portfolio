import { Card } from "./ui/card"

interface ProjectCardProps {
	title: string
	description: string
	image: string
	tags: string[]
	link: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
	return (
		<Card>{title}</Card>
	)

}

