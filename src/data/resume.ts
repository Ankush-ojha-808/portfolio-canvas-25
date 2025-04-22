
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
    period: "Aug 22 – Present",
    description:
      "Computer Science and Engineering\nCoursework: Object Oriented Programming, DSA, Computer Networks, DBMS",
  },
  {
    degree: "Intermediate (PCM)",
    institution: "JEAN Paul’s High School Ara",
    location: "Ara, Bihar",
    period: "Mar 21 – May 22"
  },
  {
    degree: "Matriculation",
    institution: "JEAN Paul’s High School Ara",
    location: "Ara, Bihar",
    period: "Mar 19 – May 20"
  },
];

export const experiences: Experience[] = [
  {
    position: "Summer Training (GeeksForGeeks) – Data Structure and Algorithm using C++",
    company: "GeeksForGeeks",
    location: "",
    period: "May 24 – Aug 24",
    description: [
      "Completed a comprehensive training program focusing on DSA principles using C++.",
      "Gained proficiency in fundamental and data structures, including arrays, linked lists, trees, and graphs.",
      "Gained expertise in DSA concepts and applied them in real-world projects."
    ],
  },
  {
    position: "N-Queen Visualizer (Project) | React.js, JavaScript, Backtracking Algorithms",
    company: "",
    location: "",
    period: "June 24 – Aug 24",
    description: [
      "Developed an interactive N-Queen problem visualizer to dynamically demonstrate backtracking algorithms, allowing users to observe the step-by-step placement of queens on the board.",
      "Implemented intuitive user controls such as play, pause, and step-by-step execution, making algorithm learning more engaging and interactive.",
      "Utilized efficient data structures to optimize board state representation, ensuring smooth and accurate visualization of the algorithm.",
      "Strengthened expertise in front-end development, algorithm visualization, and UI responsiveness."
    ]
  },
  {
    position: "Credit Card Fraud Detection (Project) | Machine Learning, Python, Logistic Regression",
    company: "",
    location: "",
    period: "Nov 24 – Feb 25",
    description: [
      "Built and optimized a logistic regression-based ML model achieving 87% accuracy in detecting fraudulent transactions.",
      "Reduced false positives by 16% through advanced feature engineering and hyperparameter tuning.",
      "Addressed class imbalance using under-sampling and ensemble methods, improving performance by 15%.",
      "Enhanced model efficiency by 23% and overall accuracy by 6%, ensuring effective fraud prevention with minimal computational overhead."
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
  "Solved around 250 problems on LeetCode",
  "Ranked among Dean’s top 10% students at the university",
  "Achieved top 20% ranking in various online coding contests",
  "Solved over 400+ algorithmic problems across platforms like LeetCode and GeeksforGeeks"
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
