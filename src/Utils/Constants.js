export const iconsComponents = {
    emailIcon : require('../assets/icons/EmailIcon').default,
    linkedInIcon : require('../assets/icons/LinkedInIcon').default,
    githubIcon : require('../assets/icons/GithubIcon').default,
    twitterIcon : require('../assets/icons/TwitterIcon').default,
}
export const  socialLinks = [
    {
        id:'email',
        icon: 'emailIcon',
        backColor: '#EEEEEE',
        link:'mailto:raton.biswas005@gmail.com'
    },
    {
        id:'linkedIn',
        icon: 'linkedInIcon',
        backColor: '#EEEEEE',
        iconColor:'blue',
        link:'https://www.linkedin.com/in/iratonbiswas/'
    },
    {
        id:'github',
        icon: 'githubIcon',
        backColor: '#EEEEEE',
        link:'https://github.com/RatonBiswas'
    },
    {
        id:'twitter',
        icon: 'twitterIcon',
        backColor: '#EEEEEE',
        iconColor:'#1DA1F2',
        link:'https://twitter.com/iratonbiswas'
    },
]

export const projectsList = [
    {
        id:'0',
        current: true,
        github: 'https://github.com/mightysoft/course-allocation',
        link: 'https://course-allocation.herokuapp.com/api/course-Allocation',
        title: 'Course Allocation',
        text:'An automation system that will help teachers to manage courses using nodejs,expressjs,and mongoose.',
    },
    {
        id:'1',
        current: false,
        github: 'https://github.com/RatonBiswas/NodeJs-Project/tree/main/EmployeeCrud',
        link: 'https://raton-employee-crud.herokuapp.com/employee',
        title: 'Employee Crud',
        text:'A Simple web app for maintaining employee’s information using nodejs,expressjs,and mongoose.',
    },
    {
        id:'2',
        current: true,
        github: 'https://github.com/mightysoft/talent-hunting',
        link: 'https://talent-hunting.herokuapp.com/api/job/all-jobs',
        title: 'Talent Hunting',
        text:'An automation system that will able to read and filter CV documents and assets personality and soft skills using nodejs,expressjs,and mongoose.',
    },
    {
        id:'3',
        current: false,
        github: 'https://github.com/RatonBiswas/Weather-app',
        link: 'https://raton-weather-application.herokuapp.com/',
        title: 'Weather-app',
        text:"(A Simple web app for check weather for any location.",
    },
    {
        id:'4',
        current: true,
        github: '#',
        link: '#',
        title: 'portfolio-for-raton',
        text:"it tooks me 2 years to decide to build my portfolio, that's why h4kim.me/ decided to create portfolio-for-dev to help other developer to not wast time and create their own portfolio in 10min . Simple, well structured and clean",
    },
]

export const skillsList = [
    {
        id:'0',
        name: 'HTML',
        understandingColor: '#FFC312'
    },
    {
        id:'1',
        name: 'CSS',
        understandingColor: '#FFC312'
    },
    {
        id:'2',
        name: 'Javascript',
        understandingColor: '#0BE881'
    },
    {
        id:'3',
        name: 'NodeJs (ExpressJs)',
        understandingColor: '#1890FF'
    },
    {
        id:'4',
        name: 'ReactJs',
        understandingColor: '#FF4D4F'
    },
    {
        id:'6',
        name: 'Mongodb (Mongoose)',
        understandingColor: '#1890FF'
    },
    {
        id:'7',
        name: 'Linux',
        understandingColor: '#FFC312'
    },
    {
        id:'8',
        name: 'SQL',
        understandingColor: '#1890FF'
    },
    {
        id:'9',
        name: 'ETL',
        understandingColor: '#FF4D4F'
    },
]

export const educationList = [
    
    
    {
        id: 1,
        courseName: 'Bsc in Software Engineering',
        technologies: ['Dffodil International University','Current SGPA : 3.88'],
        type:'International University',
        date:'Running'
    },{
        id: 2,
        courseName: 'The Complete JavaScript Course',
        instructor:'Jonas Schmedtmann',
        technologies: ['Javascript','Html','Css','OOP', 'Async Js','ES6+','Babel','Parcel'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'December 2019'
    },
    {
        id: 3,
        courseName: 'Node.js, Express, MongoDB Bootcamp',
        instructor:'Jonas Schmedtmann',
        technologies: ['Express','Mongoose','Security','Payment','Deploy','SSR','REST'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'May 2020'
    },
    {
        id: 4,
        courseName: 'React - The Complete Guide (Hooks, React Router, Redux)',
        instructor:'Maximilian Schwarzmüller',
        technologies: ['Hooks','Redux','Routing','Animations','Firebase',],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'Running'
    },
]

export const experienceList = [
    {
        id: 0,
        role :'',
        company:'',
        date :'',
        summary :'',
        tasks: [
            '',
            '',
            '',
            ''
        ]
    
    }
]



