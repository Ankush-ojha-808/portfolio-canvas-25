export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "N-Queen Visualizer",
    description: "Built an interactive visualization tool to demonstrate backtracking for the N-Queen problem in React.js.",
    imageSrc: "public/Images/N-Queen-Problem.png",
    technologies: ["React.js", "Backtracking Algorithm"],
    featured: true,
  },
  {
    id: "2",
    title: "Credit Card Fraud Detection",
    description: "Developed a logistic regression model to detect fraudulent transactions with 87% accuracy.",
    imageSrc: "public/Images/fraudml-detection-cover.avif",
    technologies: ["Python", "Logistic Regression", "Scikit-learn"],
    featured: true,
  },
  {
    id: "3",
    title: "Task Manager App",
    description: "A simple and clean productivity app that allows users to create, update, and manage their daily tasks efficiently.",
    imageSrc: "public/Images/8530bb3a-0f54-4bca-a106-b463b55039ea-cover.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A personal website built with Vite + React to showcase my projects, skills, and resume in a clean and responsive format.",
    imageSrc: "public/Images/1bc53d175842047.Y3JvcCwyMDQ1LDE2MDAsMjQzLDA.png",
    technologies: ["Vite", "React", "Tailwind CSS", "Netlify"],
  },
];
