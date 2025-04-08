
import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  // Filter featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 md:py-24">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Hi, I'm <span className="gradient-text">Your Name</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
                Frontend Developer specializing in building exceptional digital experiences
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Get in Touch
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Resume
                    <Download className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex justify-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">About Me</h2>
              <p className="mb-6 text-muted-foreground">
                I'm a passionate frontend developer with expertise in building responsive, 
                user-friendly web applications. With a strong foundation in modern JavaScript frameworks 
                and a keen eye for design, I create engaging digital experiences that solve real-world problems.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="aspect-square h-64 w-64 overflow-hidden rounded-full bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-container bg-muted/30">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
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

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button>
                View All Projects
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-container">
          <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and collaborations.
              </p>
              <Link to="/contact">
                <Button>
                  Contact Me
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
