
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  demoUrl,
  repoUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
