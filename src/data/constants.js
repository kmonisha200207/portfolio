export const Bio = {
  name: "Monisha K",
  roles: [
    "Full Stack Developer",
    "Android Developer",
    "Programmer",
  ],
  description:
    "I am an aspiring Software Developer with a strong foundation in programming, problem-solving, and system design. With experience in developing projects such as an Employee Management System and a User Management project, I am skilled in Java, Python, JavaScript, and web technologies. Currently pursuing my Master's in Computer Science, I am dedicated to continuous learning and delivering high-quality results. With a collaborative mindset and a passion for technology, I am eager to contribute to innovative projects and grow professionally.",
  github: "https://github.com/kmonisha200207",
  resume:
    "https://drive.google.com/file/d/1aREJxraxCjjrJ3aZY2q35w7NDU9ZCTpp/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/monisha-k-a19355201",
};

export const skills = [
  {
      title: "Frontend",
      skills: [
          {
              name: "HTML",
              image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
          },
          {
              name: "CSS",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
          },
          {
              name: "JavaScript",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
          },
          {
              name: "React.js",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          },
      ],
  },
  {
      title: "Backend",
      skills: [
          {
              name: "Java",
              image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
          },
          {
              name: "Spring Boot",
              image: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
          },
          {
              name: "MySQL",
              image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
          },
          {
              name: "MongoDB",
              image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          },
      ],
  },
  {
      title: "Android Development",
      skills: [
          {
              name: "Java",
              image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
          },
          {
              name: "Android Studio",
              image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
          },
      ],
  },
  {
      title: "Database & Cloud",
      skills: [
          {
              name: "MySQL",
              image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
          },
          {
              name: "MongoDB",
              image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          },
      ],
  },
  {
      title: "Other Tools",
      skills: [
          {
              name: "Git",
              image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          },
          {
              name: "GitHub",
              image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          },
          {
              name: "VS Code",
              image: "https://code.visualstudio.com/assets/images/code-stable.png",
          },
      ],
  },
];

export const experiences = [
  {
      id: 0,
      img: "/nlc.png", // Replace with actual logo URL
      role: "Web Developer Intern",
      company: "NLC India Limited",
      date: "May 2020 - June 2020",
      desc: "Developed an Employee Management System using Spring Boot for managing employee records and performance tracking. The system was designed for efficient storage, retrieval, and management of employee information, accessible by both admins and employees.",
      skills: [
          "Spring Boot",
          "Java",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
      ],
  },
  {
    id: 1,
    img: "/userserverless.png",  // Direct path to the public folder
    role: "Major project ",
    company: "User Management Project",
    date: "Jun 2021 - Aug 2021",
    desc: "Developed a serverless, responsive web application using HTML, CSS, and JavaScript. The project focused on enhancing user engagement and was noted for implementing new features with Java, enhancing overall system efficiency.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
    ],
  },
  {
      id: 2,
      img: "/shopping.png", // Replace with actual logo URL
      role: "Project Developer",
      company: "Shopping Cart - EasyBuy",
      date: "Jun 2022 - Aug 2022",
      desc: "Built an e-commerce website aimed at creating a user-interactive web application using HTML, CSS, JavaScript, MongoDB, React.js, and Express.js.",
      skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "React.js",
          "Express.js",
      ],
  },
];

export const education = [
  {
      id: 0,
      img: "/bishop.jpg",
      school: "Bishop Heber College, Tiruchirappalli",
      date: "Aug 2023 - May 2025 (expected)",
      grade: "Expected 85%",
      desc: "I am currently pursuing a Master's degree in Computer Science at Bishop Heber College. I am focused on advanced topics in programming, system design, and data analysis, and anticipate completing my studies with an expected score of 85%.",
      degree: "Master of Computer Applications - MCA",
  },
  {
      id: 1,
      img: "/psg.jpeg",
      school: "PSG COLLEGE OF ARTS AND SCIENCE",
      date: "Aug 2020 - May 2023",
      grade: "Graduated with 85%",
      desc: "I completed my Bachelor's degree in Computer Science, where I gained foundational knowledge in programming languages, data structures, algorithms, databases, and software development.",
      degree: "Bachelor of Science - BSc, Computer Science",
  },
];

export const projects = [
  {
      id: 1,
      title: "User Management - Serverless",
      date: "May 2020 - June 2020",
      description: "Developed a responsive web application using HTML, CSS, and JavaScript, which increased user engagement by 30%. Contributed to implementing new features using Java, enhancing overall system efficiency.",
      image: "/userserverless.png", // Replace with actual image URL
      tags: ["HTML", "CSS", "JavaScript", "Java"],
      category: "web app",
      github: "https://github.com/kmonisha200207/User-Management",
      // Replace with actual link if available
  },
  {
      id: 2,
      title: "Shopping Cart - EasyBuy",
      date: "Jun 2022 - Aug 2022",
      description: "Developed an interactive e-commerce website aimed at creating a user-friendly shopping experience. Used HTML, CSS, JavaScript, MongoDB, React.js, and Express.js to build the app.",
      image: "/shopping.png", // Replace with actual image URL
      tags: ["HTML", "CSS", "JavaScript", "MongoDB", "React.js", "Express.js"],
      category: "web app",
      github: "https://github.com/kmonisha200207/Shopping-Cart", // Replace with actual link if available
  },
  {
      id: 3,
      title: "Employee Management System",
      date: "May 2020 - June 2020",
      description: "Created a management application for storing employee details and tracking their performance using Spring Boot. Designed for both admin and employee access within a company.",
      image: "/employeemanagement.png", // Replace with actual image URL
      tags: ["Spring Boot", "MySQL", "Java"],
      category: "web app",
      github: "https://github.com/kmonisha200207/Employee-Management-System",
      // Replace with actual link if available
  }
];

export const TimeLineData = [
{ year: 2020, text: "Started Bachelor's in Computer Science" },
{ year: 2020, text: "Completed internship as a Web Developer at NLC India Limited" },
{ year: 2023, text: "Started Master's in Computer Science at Bishop Heber College" },
{ year: 2024, text: "Participated in seminars and workshops, including Machine Learning and Robotics" },
{ year: 2025, text: "Expected completion of Master's with 85%" },
];
