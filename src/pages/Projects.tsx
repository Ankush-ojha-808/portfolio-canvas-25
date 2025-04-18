
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <div className="page-transition">
        <div className="section-container">
          <PageHeader
            title="Projects"
            subtitle="A collection of my recent work and personal projects"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
