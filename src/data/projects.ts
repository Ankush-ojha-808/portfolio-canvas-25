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
    imageSrc: "https://images.unsplash.com/photo-1581090700227-1e8f1a27d8c6?auto=format&fit=crop&w=800&h=450",
    technologies: ["React.js", "Backtracking Algorithm"],
    featured: true,
  },
  {
    id: "2",
    title: "Credit Card Fraud Detection",
    description: "Developed a logistic regression model to detect fraudulent transactions with 87% accuracy.",
    imageSrc: "https://images.unsplash.com/photo-1581090700182-2d254b532f4f?auto=format&fit=crop&w=800&h=450",
    technologies: ["Python", "Logistic Regression", "Scikit-learn"],
    featured: true,
  },
  {
    id: "3",
    title: "Task Manager App",
    description: "A simple and clean productivity app that allows users to create, update, and manage their daily tasks efficiently.",
    imageSrc: "https://images.unsplash.com/photo-1611078489935-b731cd67b042?auto=format&fit=crop&w=800&h=450",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A personal website built with Vite + React to showcase my projects, skills, and resume in a clean and responsive format.",
    imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&h=450",
    technologies: ["Vite", "React", "Tailwind CSS", "Netlify"],
  },
];
