export const iconsComponents = {
  emailIcon: require("../assets/icons/EmailIcon").default,
  linkedInIcon: require("../assets/icons/LinkedInIcon").default,
  githubIcon: require("../assets/icons/GithubIcon").default,
  twitterIcon: require("../assets/icons/TwitterIcon").default,
};
export const socialLinks = [
  {
    id: "email",
    icon: "emailIcon",
    backColor: "#EEEEEE",
    link: "mailto:iratonbiswas@gmail.com",
  },
  {
    id: "linkedIn",
    icon: "linkedInIcon",
    backColor: "#EEEEEE",
    iconColor: "blue",
    link: "https://www.linkedin.com/in/iratonbiswas/",
  },
  {
    id: "github",
    icon: "githubIcon",
    backColor: "#EEEEEE",
    link: "https://github.com/RatonBiswas",
  },
  {
    id: "twitter",
    icon: "twitterIcon",
    backColor: "#EEEEEE",
    iconColor: "#1DA1F2",
    link: "https://twitter.com/iratonbiswas",
  },
];

export const projectsList = [
  {
    id: "0",
    current: true,
    github:
      "https://github.com/RatonBiswas/vue-learning/tree/main/1.vue-tuto/coach",
    link: "https://icoaches.netlify.app/coaches",
    title: "Coach Finder",
    text: "A Coach Finder simply use for practice core vue js and vuex and load some data into firebase.",
  },
  {
    id: "1",
    current: true,
    github: "https://github.com/RatonBiswas/vue-learning",
    link: "https://github.com/RatonBiswas/vue-learning",
    title: "VueJs Practice Guide",
    text: "Here, some courses have been practiced to clear the concept of Vue Js, and Vuex, Pinia.",
  },
  {
    id: "2",
    current: false,
    github:
      "https://github.com/RatonBiswas/NodeJs-Project/tree/main/Factory-Handler",
    link: "https://www.npmjs.com/package/factory-handler",
    title: "Factory Handler",
    text: "A handler factory function documents from all the other collections,with one simple function",
  },
  {
    id: "3",
    current: false,
    github: "https://github.com/mightysoft/talent-hunting",
    link: "https://talent-hunting.herokuapp.com/api/job/all-jobs",
    title: "Talent Hunting",
    text: "An automation system that will able to read and filter CV documents and assets personality and soft skills using nodejs,expressjs,and mongoose.",
  },
  {
    id: "4",
    current: false,
    github:
      "https://github.com/RatonBiswas/NodeJs-Project/tree/main/EmployeeCrud",
    link: "https://raton-employee-crud.herokuapp.com/employee",
    title: "Employee Crud",
    text: "A Simple web app for maintaining employee’s information using nodejs,expressjs,and mongoose.",
  },
  {
    id: "5",
    current: false,
    github: "https://github.com/RatonBiswas/Weather-app",
    link: "https://raton-weather-application.herokuapp.com/",
    title: "Weather-app",
    text: "A Simple web app for check weather for any location.",
  },
  {
    id: "6",
    current: true,
    github: "https://github.com/RatonBiswas/raton-portfolio",
    link: "https://ratonbiswas.netlify.app/",
    title: "portfolio-for-raton",
    text: "it tooks me 2 years to decide to build my portfolio, that's why h4kim.me/ decided to create portfolio-for-dev to help other developer to not wast time and create their own portfolio in 10min . Simple, well structured and clean",
  },
  {
    id: "7",
    current: true,
    github: "https://github.com/RatonBiswas/React",
    link: "https://github.com/RatonBiswas/React",
    title: "React Practice Guide",
    text: "Here, some courses have been practiced to clear the concept of react js, so no project has been made live.",
  },
  {
    id: "8",
    current: false,
    github: "https://github.com/mightysoft/course-allocation",
    link: "https://course-allocation.herokuapp.com/api/course-Allocation",
    title: "Course Allocation",
    text: "An automation system that will help teachers to manage courses using nodejs,expressjs,and mongoose.",
  },
];

export const skillsList = [
  {
    id: "0",
    name: "Javascript",
    understandingColor: "#0BE881",
  },
  {
    id: "1",
    name: "Vue Js",
    understandingColor: "#1890FF",
  },
  {
    id: "2",
    name: "Vuex",
    understandingColor: "#1890FF",
  },

  {
    id: "11",
    name: "HTML",
    understandingColor: "#FFC312",
  },
  {
    id: "12",
    name: "CSS",
    understandingColor: "#FFC312",
  },

  {
    id: "6",
    name: "MS Sql",
    understandingColor: "#0BE881",
  },
  {
    id: "4",
    name: "ETL Tools (Pervasive,Pentaho)",
    understandingColor: "#0BE881",
  },
  {
    id: "5",
    name: "NodeJs (ExpressJs)",
    understandingColor: "#1890FF",
  },

  {
    id: "3",
    name: "ReactJs",
    understandingColor: "#FFC312",
  },
  {
    id: "7",
    name: "Mongodb (Mongoose)",
    understandingColor: "#1890FF",
  },
  {
    id: "10",
    name: "Linux",
    understandingColor: "#FFC312",
  },
  {
    id: "8",
    name: "Power BI",
    understandingColor: "#FFC312",
  },
  {
    id: "9",
    name: "Dax",
    understandingColor: "#FFC312",
  },
];

export const educationList = [
  {
    id: 0,
    courseName: "Bsc in Software Engineering",
    technologies: ["Dffodil International University", "Current SGPA : 3.90"],
    type: "International University",
    date: "24th September 2021",
  },
  {
    id: 1,
    courseName: "Vue 3 Fundamentals",
    instructor: "Ben Hong From Netlify",
    technologies: [
      "vue",
      "vuex",
      "pinia",
      "components",
      "Lifecycle Hooks",
      "Directives",
      "Vue Routes",
      "Slots",
    ],
    type: "Online Training",
    courseProvider: "FrontEnd Masters",
    date: "May 2023",
  },
  {
    id: 2,
    courseName: "Production-Grade Vue.js",
    instructor: "Ben Hong From Netlify",
    technologies: [
      "routing",
      "state management",
      " testing methodologies",
      "enhance productivity",
    ],
    type: "Online Training",
    courseProvider: "FrontEnd Masters",
    date: "July 2023",
  },
  {
    id: 3,
    courseName: "The Complete JavaScript Course",
    instructor: "Jonas Schmedtmann",
    technologies: [
      "Javascript",
      "Html",
      "Css",
      "OOP",
      "Async Js",
      "ES6+",
      "Babel",
      "Parcel",
    ],
    type: "Online Training",
    courseProvider: "Udemy",
    date: "December 2019",
  },
  {
    id: 4,
    courseName: "Node.js, Express, MongoDB Bootcamp",
    instructor: "Jonas Schmedtmann",
    technologies: [
      "Express",
      "Mongoose",
      "Security",
      "Payment",
      "Deploy",
      "SSR",
      "REST",
    ],
    type: "Online Training",
    courseProvider: "Udemy",
    date: "May 2020",
  },
  {
    id: 5,
    courseName: "React - The Complete Guide (Hooks, React Router, Redux)",
    instructor: "Maximilian Schwarzmüller",
    technologies: ["Hooks", "Redux", "Routing", "Animations", "Firebase"],
    type: "Online Training",
    courseProvider: "Udemy",
    date: "May 2021",
  },
  {
    id: 6,
    courseName: "Pentaho for ETL & Data Integration Masterclass 2021- PDI 9.0",
    instructor: "Start-Tech Academy",
    technologies: ["Pentaho", "SQL"],
    type: "Online Training",
    courseProvider: "Udemy",
    date: "August 2021",
  },
];

export const experienceList = [
  {
    id: 0,
    role: "Software Engineer (ETL Developer)",
    company: "Nassprotech Technology",
    date: "June 2021",
    summary:
      "I am working here as a Junior Data Analyst from June 2021 to July 2022. My responsibility is to work on pervasive And Pentaho ETL tool and create APIs and other technologies for endpoints of web applications.",
    tasks: [
      "Create, test and maintain etl processes",
      "Create dashboard and reports using SQL Server Reporting Services.",
      "Create efficient SQL server solutions for data ingestion and visualization.",
      "Design and develop Restful APIs for different web applications.",
      "Writing high level SQL queries, stored procedures.",
      "Extract Data and Filtering with condition load data in data warehouses using pervasive and pentaho.",
    ],
  },
];
