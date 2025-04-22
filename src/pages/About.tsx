
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SkillBadge from "@/components/SkillBadge";
import { skills, education } from "@/data/resume";

export default function About() {
  return (
    <Layout>
      <div className="page-transition">
        <div className="section-container">
          <PageHeader
            title="About Me"
            subtitle="Learn more about my background, skills, and experience"
          />

          {/* Bio Section */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500"
                  alt="Profile"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm Abhinav Kumar — a Computer Science Engineering undergrad at Lovely Professional University, passionate about frontend development, data structures, and algorithms.
                </p>
                <p>
                  I have a strong foundation in OOP, DBMS, and computer networks, and I love working on challenging algorithmic problems and real-world projects.
                </p>
                <p>
                  My experience includes internships at GeeksForGeeks focusing on C++ and DSA, as well as hands-on projects like credit card fraud detection and an N-Queen visualizer built with React.js.
                </p>
                <p>
                  I'm always eager to learn new technologies, collaborate on impactful projects, and grow as a developer. Beyond tech, I value leadership, teamwork, and effective communication.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm" key={i}>
                  <h3 className="mb-1 text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {edu.institution} • {edu.location} • {edu.period}
                  </p>
                  {edu.description && (
                    <p className="mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">My Skills</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-3 text-xl font-semibold">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
