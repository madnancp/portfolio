export interface Project {
  title: string
  description: string
  image: string
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

export interface Education {
  institution: string
  url: string
  location: string
  degree: string
  specialization: string
  period: string
  isCurrent: boolean
  highlights: string[]
}

export interface Competencies {
  area: string
  description: string
  key: string

}
