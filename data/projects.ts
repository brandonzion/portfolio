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
    title: "CNTR AISLE Scoring Platform (Coming Soon)",
    description:
      "Scoring platform for CNTR AISLE for policy experts to score AI legislation.",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/Timfon/cntr-webapp",
    featured: false,
  },
  {
    id: "3",
    title: "SmartGrouper - TechForTeachers",
    description:
      "Tool developed by students, for teachers. Automates dynamic grouping of students.",
    technologies: ["React", "Node.js", "AWS", "GraphQL"],
    githubUrl: "https://github.com/techforteachers/groupingapp",
    liveUrl: "https://smartgrouper.techforteachers.site/",
    imageUrl: "/images/smartgrouper.png",
    featured: true,
  },
  {
    id: "4",
    title: "Brown Bed n' Breakfast",
    description:
      "Forum where students can review dorms and dining halls. Recommends dorms to students based on needs and preferences for a living space.",
    technologies: ["React", "TypeScript", "Clerk", "Firebase"],
    githubUrl: "https://github.com/brandonzion/brown-bed-n-breakfast",
    imageUrl: "/images/brownbnb.png",
    featured: false,
  },
];

