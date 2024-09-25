import golden from '../../assets/golden.webp';
import aichat from '../../assets/aichat.webp';
import fruitStand from '../../assets/fruitStand.webp';
import portfolio from '../../assets/portfolio.webp';

const projectData = [
    {
        id: 1,
        name: "Personal Website",
        icon: portfolio,
        description: "Developed a responsive portfolio website using React, featuring dynamic project cards that expand to reveal detailed information about each project. The site also includes a contact form integrated with EmailJS for easy communication.",
        technologies: ["React", "EmailJS", "CSS", "HTML", "JavaScript", "Git"],
        url: "https://github.com/yhannineh/portfolio"
    },
    {
        id: 2,
        name: "Pizzeria Website",
        icon: golden,
        description: "Developed a responsive pizza website with Next.js, integrating the Mailchimp API for newsletter sign-ups. Enhanced user insights and compliance by implementing Google Analytics and a cookie consent popup. Applied Playwright for end-to-end testing and used Agile principles to streamline development.",
        technologies: ["Next.js(React-based framework)", "Node.js", "HTML", "CSS", "JavaScript", "Mailchimp API", "GoogleAnalytics", "Playwright", "Git", "Agile"],
        url: "https://github.com/yhannineh/IS218001-Final"
    },
    {
        id: 3,
        name: "CosmoChat-AI",
        icon: aichat,
        description: "Developed a React application integrating Chart.js and a chat interface using @chatscope/chat-ui-kit-react. The app features real-time message handling and displays a bar chart tracking the number of user messages. The application communicates with OpenAI's API to generate responses.",
        technologies: ["React", "Chart.js", "JavaScript", "CSS", "HTML", "OpenAI API", "Chat UI Kit"],
        url: "https://github.com/yhannineh/cosmochat-ui"
    },
    {
        id: 4,
        name: "Fruit Stand",
        icon: fruitStand,
        description: "Built a fruit stand website using PHP, SQL, HTML, CSS, and JavaScript. The site features user authentication, allowing logged-in users to manage fruit listings. Also developed a tool for generating shipping labels to streamline the process.",
        technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
        url: null
    },
    
];

export default projectData;