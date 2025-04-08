
import React from "react";
import { Download, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, experiences, skills, certificates } from "@/data/resume";

export default function Resume() {
  return (
    <Layout>
      <div className="page-transition">
        <div className="section-container">
          <PageHeader title="Resume" subtitle="My professional background and qualifications" />

          <div className="mb-8 flex justify-center">
            <Button>
              <Download className="mr-2" size={16} />
              Download Resume (PDF)
            </Button>
          </div>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>{job.position}</CardTitle>
                      <span className="rounded-full bg-muted px-3 py-1 text-sm">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {job.company} • {job.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle>{edu.degree}</CardTitle>
                      <span className="rounded-full bg-muted px-3 py-1 text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-muted px-3 py-1 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </CardHeader>
                  {cert.url && (
                    <CardContent>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="mr-1" size={14} />
                        <span>View Certificate</span>
                      </a>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
