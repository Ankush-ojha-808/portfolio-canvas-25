
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SkillBadge from "@/components/SkillBadge";
import { skills } from "@/data/resume";

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
                  Hello! I'm a passionate frontend developer with over 5 years of experience in creating dynamic, responsive web applications. My journey in web development began during my college years, where I discovered my love for crafting intuitive user interfaces.
                </p>

                <p>
                  After graduating with a degree in Computer Science, I joined a startup where I honed my skills in modern JavaScript frameworks and component-based architecture. This experience taught me the importance of writing clean, maintainable code and collaborating effectively with cross-functional teams.
                </p>

                <p>
                  Currently, I'm focused on building accessible, inclusive products and digital experiences at Tech Solutions Inc. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
                </p>

                <p>
                  I believe in continuous learning and regularly attend tech conferences and workshops to stay updated with the latest industry trends and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-1 text-xl font-semibold">
                  Master of Science in Computer Science
                </h3>
                <p className="text-muted-foreground">Tech University • 2018 - 2020</p>
                <p className="mt-2">
                  Specialized in Artificial Intelligence and Machine Learning. Thesis on reinforcement learning applications in automated systems.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-1 text-xl font-semibold">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-muted-foreground">State University • 2014 - 2018</p>
                <p className="mt-2">
                  Graduated with honors. Active member of Computer Science Club and participated in multiple hackathons.
                </p>
              </div>
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
