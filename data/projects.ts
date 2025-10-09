export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "4real?",
    description: "AI-Powered Authenticity Verification Platform",
    technologies: [
      "Python",
      "Flask",
      "PyTorch",
      "OpenCV",
      "Nuxt.js",
      "Google Gemini",
      "Supabase",
      "SerpAPI",
    ],
    githubUrl: "https://github.com/AntoDono/HackHarvard",
    liveUrl: "https://4reall.netlify.app/",
    imageUrl: "/images/4real.png",
    featured: true,
  },
  {
    id: "2",
    title: "SmartGrouper - TechForTeachers",
    description:
      "Tool developed by students, for teachers. Automates dynamic grouping of students.",
    technologies: ["React", "Node.js", "AWS", "GraphQL"],
    githubUrl: "https://github.com/techforteachers/groupingapp",
    liveUrl: "https://smartgrouper.techforteachers.site/",
    imageUrl: "/images/smartgrouper.png",
    featured: true,
  },
];

