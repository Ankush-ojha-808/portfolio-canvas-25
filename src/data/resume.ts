
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
    degree: "Bachelor of Technology",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2022 – Present",
    description:
      "Major: Computer Science and Engineering\nRelevant Coursework: Object Oriented Programming, Data Structures & Algorithms, Computer Networks, DBMS",
  },
  {
    degree: "Intermediate (PCM)",
    institution: "JEAN Paul’s High School Ara",
    location: "Ara, Bihar",
    period: "Mar 2021 – May 2022"
  },
  {
    degree: "Matriculation",
    institution: "JEAN Paul’s High School Ara",
    location: "Ara, Bihar",
    period: "Mar 2019 – May 2020"
  },
];

export const experiences: Experience[] = [
  {
    position: "Summer Training – Data Structure and Algorithm using C++",
    company: "GeeksForGeeks",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    description: [
      "Completed a comprehensive summer training program on DSA with C++.",
      "Strengthened understanding of arrays, linked lists, trees, and graphs, and solved industry-level DSA assignments.",
      "Applied concepts in semester projects and personal coding practice."
    ],
  },
  {
    position: "Developer – N-Queen Visualizer (React.js, Backtracking)",
    company: "Personal Project",
    location: "",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Built an interactive visualization tool to demonstrate backtracking for the N-Queen problem in React.js.",
      "Implemented step-by-step execution and user controls for interactive learning.",
      "Optimized board state logic for smooth and accurate visualization."
    ]
  },
  {
    position: "ML Developer – Credit Card Fraud Detection (Python, Logistic Regression)",
    company: "Personal Project",
    location: "",
    period: "Nov 2024 – Feb 2025",
    description: [
      "Developed a logistic regression model to detect fraudulent transactions with 87% accuracy.",
      "Improved model by 16% using advanced feature engineering and ensemble methods.",
      "Reduced false positives and increased computational efficiency using optimized pipelines."
    ]
  }
];

export const skills: Skills[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "C", "Java", "R"]
  },
  {
    category: "Tools",
    skills: ["Docker", "Jenkins", "Postman", "Git/GitHub", "Tableau", "Microsoft Excel"]
  },
  {
    category: "Frameworks",
    skills: ["Numpy", "Panda", "Scikit-Learn", "Matplotlib", "Reach.js"]
  },
  {
    category: "Soft Skills",
    skills: [
      "Adaptive learner",
      "Strong communication",
      "Leadership capability"
    ]
  },
  {
    category: "Platforms",
    skills: [
      "PyCharm",
      "Jupyter Notebook",
      "VS Code",
      "IntelliJ IDEA",
      "Cursor"
    ]
  }
];

export const achievements: string[] = [
  "Solved 250+ problems on LeetCode.",
  "Ranked among Dean’s top 10% students at LPU.",
  "Top 20% in online coding contests.",
  "Solved 400+ algorithmic problems across LeetCode and GFG."
];

export const certificates: Certificate[] = [
  {
    name: "IBM DevOps and Software Engineering Specialization",
    issuer: "IBM",
    date: "Nov 2024"
  },
  {
    name: "Programming in C++: A Hands-on Introduction",
    issuer: "Coursera",
    date: "May 2023"
  },
  {
    name: "Dynamic Programming, Greedy Algorithms",
    issuer: "Udemy",
    date: "Nov 2023",
  },
  {
    name: "Python (Basic Level)",
    issuer: "HackerRank",
    date: "Oct 2022",
  }
];
