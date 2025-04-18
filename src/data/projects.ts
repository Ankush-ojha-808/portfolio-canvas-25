
export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout.",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/e-commerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
    imageSrc: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/task-management",
    technologies: ["TypeScript", "React", "Firebase", "Redux"],
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current conditions and forecasts for locations worldwide.",
    imageSrc: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/weather-dashboard",
    technologies: ["JavaScript", "React", "OpenWeather API", "CSS"],
  },
  {
    id: "4",
    title: "Recipe Finder",
    description: "A recipe search application that lets users find dishes based on ingredients they have on hand.",
    imageSrc: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/recipe-finder",
    technologies: ["React", "Spoonacular API", "CSS Grid", "Context API"],
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking app that allows users to log and visualize workout progress.",
    imageSrc: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/fitness-tracker",
    technologies: ["React Native", "Firebase", "D3.js", "Styled Components"],
  },
  {
    id: "6",
    title: "Budget Calculator",
    description: "A budgeting tool that helps users track expenses and visualize spending habits.",
    imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=450",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/budget-calculator",
    technologies: ["Vue.js", "Vuex", "Chart.js", "Firebase"],
  },
];
