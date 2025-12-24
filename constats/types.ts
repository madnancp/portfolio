export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

interface ExperienceRole {
  title: string
  type: string
  period: string
  duration?: string
  isCurrent: boolean
  achievements: string[]
}

export interface Experience {
  company: string
  location: string
  url: string
  isRemote: boolean
  roles: ExperienceRole[]
}

