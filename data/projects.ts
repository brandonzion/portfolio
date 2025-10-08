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
    title: "Virtual Jazz Ensemble",
    description:
      "Real-time collaborative music platform for remote jazz sessions",
    technologies: ["Next.js", "WebRTC", "Node.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/virtual-ensemble",
    liveUrl: "https://virtual-ensemble.com",
    featured: true,
  },
  {
    id: "3",
    title: "Music Theory Visualizer",
    description:
      "Interactive tool for visualizing jazz harmony and chord progressions",
    technologies: ["React", "TypeScript", "D3.js", "Tone.js"],
    githubUrl: "https://github.com/yourusername/theory-viz",
    liveUrl: "https://music-theory-viz.com",
    featured: false,
  },
];

