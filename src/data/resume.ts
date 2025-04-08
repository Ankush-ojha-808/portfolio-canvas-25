
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skills {
  category: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    location: "San Francisco, CA",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on reinforcement learning applications in automated systems.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    location: "Boston, MA",
    period: "2014 - 2018",
    description: "Graduated with honors. Active member of Computer Science Club and participated in multiple hackathons.",
  },
];

export const experiences: Experience[] = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2022 - Present",
    description: [
      "Lead a team of 5 developers in building a real-time analytics dashboard using React and D3.js",
      "Implemented performance optimizations that reduced page load time by 40%",
      "Established code quality standards, resulting in 30% fewer bugs in production",
      "Collaborated with UX designers to create an intuitive interface for complex data visualization"
    ],
  },
  {
    position: "Frontend Developer",
    company: "Digital Innovations",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Developed responsive web applications using React, TypeScript, and Redux",
      "Built reusable component library that increased development speed by 25%",
      "Contributed to migration from legacy codebase to modern React architecture",
      "Collaborated with backend developers to integrate RESTful APIs and GraphQL"
    ],
  },
  {
    position: "Web Developer Intern",
    company: "StartUp Hub",
    location: "Boston, MA",
    period: "2018 - 2020",
    description: [
      "Assisted in developing and maintaining client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in daily stand-ups and sprint planning using Agile methodologies",
      "Created documentation for onboarding new team members"
    ],
  },
];

export const skills: Skills[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3/SASS", "Redux", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Methods",
    skills: ["Git", "CI/CD", "Jest", "Webpack", "Agile", "Figma", "Adobe XD"],
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem Solving", "Time Management", "Teamwork"],
  },
];

export const certificates: Certificate[] = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    name: "Professional Frontend Developer",
    issuer: "Meta",
    date: "2021",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    name: "React Nanodegree",
    issuer: "Udacity",
    date: "2020",
    url: "https://www.udacity.com",
  },
];
