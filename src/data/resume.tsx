// src/data/resume.tsx
import {
    Github,
    Mail,
    Zap,
    Accessibility,
    MessageSquareText,
} from "lucide-react";
import { SiteConfig } from "@/types";

export const resume: SiteConfig = {
    name: "Geethu Ayyappan",
    role: "Front-End Developer",
    location: "Ernakulam, Kerala",
    email: "geethu.ka123@gmail.com",
    bio: [
        "I am a Front end developer with professional experience web based learning and examination platforms"
    ]
,    typewriterWords: [
        "web applications.",
        "user-friendly interfaces.",
        "digital experiences.",
    ],

    contact: {
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/geethuka",
                icon: Github,
            },
            {
                name: "Email",
                url: "mailto:geethu.ka123@gmail.com",
                icon: Mail,
            },
        ],
    },

    skills: [
        "Angular 6–10",
        "HTML5",
        "CSS3",
        "React.js",
        "Next.js",
    ],

    attributes: [
        {
            label: "Problem Solving",
            description: "Approaching development challenges thoughtfully.",
            icon: Accessibility,
            color: "text-blue-400",
        },
        {
            label: "Teamwork",
            description: "Working collaboratively toward shared goals.",
            icon: Zap,
            color: "text-amber-400",
        },
        {
            label: "Openness to Learning",
            description: "Continuously learning and adapting to new technologies.",
            icon: MessageSquareText,
            color: "text-emerald-400",
        },
    ],

    experience: [
        {
            type: "work",
            company: "Sumskar Systems Private Limited",
            icon: "SS",
            containerClass: "bg-blue-500/10 border-blue-500/20",
            textClass: "text-blue-400",
            title: "Front-End Developer",
            period: "Nov 2019 – Oct 2023",
            highlights: [
                "Worked on web-based learning management and online examination platforms.",
                "Contributed to teacher portal features, including task assignment, notifications, and reviewing summaries.",
                "Worked on recorded-class features with playback-time restrictions and advanced examination functionality.",
                "Implemented a scholarship feature with benchmark-based discounts and dynamic portal behavior.",
            ],
        },
        {
            type: "education",
            company: "Islamic Learning Mission Trust College of Engineering, Methala",
            icon: "ILM",
            containerClass: "bg-violet-500/10 border-violet-500/20",
            textClass: "text-violet-400",
            title: "B.Tech in Computer Science",
            period: "May 2017",
            highlights: [
                "Bachelor of Technology in Computer Science.",
            ],
        },
        {
            type: "education",
            company: "Jayakeralam Higher Secondary School, Pulluvazhy",
            icon: "JH",
            containerClass: "bg-emerald-500/10 border-emerald-500/20",
            textClass: "text-emerald-400",
            title: "Higher Secondary Education",
            period: "Apr 2013",
            highlights: [],
        },
    ],

    projects: [
        {
            title: "Baashaa Exam Center",
            client: "Sumskar Systems Private Limited",
            timeline: "Professional Project",
            techStack: ["Angular", "HTML5", "CSS3"],
            images: [],
            description:
                "A plug-in examination platform designed to work as an exam center within a Learning Management System. It includes Presets, Questions, Exams, Exam Assigning, and Evaluation.",
            scope: "Web Application",
            responsibilities: [
                "Worked on creating a question bank for objective and descriptive questions.",
                "Supported multimedia question creation for use in exams.",
            ],
            languages: ["Angular", "HTML5", "CSS3"],
        },
        {
            title: "Baashaa LMS",
            client: "Sumskar Systems Private Limited",
            timeline: "Professional Project",
            techStack: ["Angular", "HTML5", "CSS3"],
            images: [],
            description:
                "A web-based Learning Management System with online course materials, exams, continuous assessment reports, and separate portals for administrators, course coordinators, content creators, teachers, and students.",
            scope: "Learning Management System",
            responsibilities: [
                "Worked on the Teacher Portal, where teachers interact with students.",
                "Contributed to task assignment, custom notifications, and reviewing summaries.",
            ],
            languages: ["Angular", "HTML5", "CSS3"],
            demoUrl: "https://dev.baashaa.com/baashaa-learning-system/admin",
        },
        {
            title: "Lakshya Learning",
            client: "Sumskar Systems Private Limited",
            timeline: "Professional Project",
            techStack: ["Angular", "HTML5", "CSS3"],
            images: [],
            description:
                "An online learning platform for students preparing for professional courses such as ACCA, CA, CMA USA, CMA India, and CS. It includes live classes, recorded classes, and an advanced exam component.",
            scope: "Online Learning Platform",
            responsibilities: [
                "Worked on recorded-class functionality with playback-time restrictions.",
                "Worked on advanced exam features, including spot answer and exam re-entry.",
            ],
            languages: ["Angular", "HTML5", "CSS3"],
        },
        {
            title: "leloJEE",
            client: "Sumskar Systems Private Limited",
            timeline: "Professional Project",
            techStack: ["Angular", "HTML5", "CSS3"],
            images: [],
            description:
                "An online platform for JEE Main students with Finisher courses containing practice exams and Builder courses containing study materials and exams. The platform includes payment gateway integration, referral codes, scholarship exams, and a revision handbook.",
            scope: "Online Learning Platform",
            responsibilities: [
                "Worked on the scholarship feature, applying discounts when a student's score exceeded the benchmark.",
                "Helped make portal design behavior dynamic based on the scholarship feature status.",
            ],
            languages: ["Angular", "HTML5", "CSS3"],
            demoUrl: "https://lelojee.in/jee/online_exam/landing",
        },
        {
            title: "Personal Portfolio Website",
            client: "Personal Project",
            timeline: "2026",
            techStack: ["React.js", "TypeScript", "Vite", "GitHub", "Vercel"],
            images: [],
            description:
                "A personal portfolio website created to present my professional profile, skills, experience, and selected projects.",
            scope: "Frontend Development",
            responsibilities: [
                "Built the portfolio using React and TypeScript.",
                "Uploaded project code to GitHub and deployed the website using Vercel.",
            ],
            languages: ["React.js", "TypeScript", "CSS"],
            repoUrl: "https://github.com/geethuka/geethu-new-portfolio",
            demoUrl: "https://geethu-new-portfolio.vercel.app",
        },
    ],
};
