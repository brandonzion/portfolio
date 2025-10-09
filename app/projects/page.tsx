import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectsClient from "./ProjectsClient";

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}

