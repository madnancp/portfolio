import { Experience } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Grey Codes Solution LLC",
    location: "Dubai, United Arab Emirates",
    url: "https://greycodes.ae",
    isRemote: true,
    roles: [
      {
        title: "Assistant Team Lead",
        type: "Full-time",
        period: "Sep 2025 - Present",
        isCurrent: true,
        achievements: [
          "Leading an IT team while staying hands-on with development.",
          "Mentoring team members and maintaining coding standards and best practices."
        ]
      },
      {
        title: "Full Stack Developer",
        type: "Internship",
        period: "Jan - Sep 2025",
        duration: "9 months",
        isCurrent: false,
        achievements: [
          "Supervised the project workflow using GitHub, ensuring collaboration among team members.",
          "Contributed to project strategy and technical decision-making.",
          "Consistently delivered high-quality work ahead of schedule."
        ]
      }
    ]
  }
];
