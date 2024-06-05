export const techStack = [
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", name: "c" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", name: "c++" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", name: "python" },
    // { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", name: "java" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", name: "html5" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", name: "css3" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", name: "javascript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", name: "typescript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", name: "tailwindcss" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", name: "react" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg", name: "angular" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", name: "flask" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", name: "springboot" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", name: "mongodb" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", name: "git" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", name: "github" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", name: "node.js" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", name: "next.js" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", name: "express" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", name: "vscode" },
]
import { medleyPic,attendanceProjectPic, attendanceProjectLogo, medleyLogo, mailProject, leetCode, github, linkedin, instagram, hackerrank, leetCodeWhite, githubWhite, linkedinWhite, instagramWhite, hackerrankwhite } from "../assets"
export const projects=[
    {
        id:34,
        title:'Grammarly Clone',
        code:'https://github.com/Vignaraj-1018/grammarly-clone',
        demo:'https://grammarly-clone-vignu.netlify.app/',
        dp:mailProject,
        pic:mailProject,
        techStack:['Next.js', 'Gemini API'],
        description:"Grammarly clone, a website and a Chrome extension, that allows users to correct their grammar and spelling mistakes on the go. This project showcases my..."
    },
    {
        id:33,
        title:'Student Attendance System',
        code:'https://github.com/Vignaraj-1018/Students-Attendance-System-Frontend',
        demo:'https://students-attendance-system.vercel.app/',
        dp:attendanceProjectLogo,
        pic:attendanceProjectPic,
        techStack:['Angular', 'SpringBoot', 'MongoDB'],
        description:"This Angular-based front-end repository powers a Student Attendance System, providing a user-friendly interface for students to effortlessly track their..."
    },
    {
        id:32,
        title:'Mail Merchant',
        code:'https://github.com/Vignaraj-1018/Mail-Merchant',
        demo:'https://mail-merchant.netlify.app/',
        dp:mailProject,
        pic:mailProject,
        techStack:['React', 'Flask', 'MongoDB'],
        description:"Mail Merchant is a free email integration API built with Python Flask and MongoDB. Users can create an account, verify their email address, and obtain an..."
    },
    {
        id:31,
        title:'Medley - Music Player',
        code:'https://github.com/Vignaraj-1018/MEDLEY-Music-Player',
        demo:'https://medley-web.netlify.app/',
        dp:medleyLogo,
        pic:medleyPic,
        techStack:['React', 'Redux', 'ShazamAPI'],
        description:"Plays songs with Shazam Core API. Plays the desired song on search. Explore trending songs around us with Geolocation API."
    },
]

const leetCodeAPIUrl = "https://helper-api-vignu.el.r.appspot.com/leetcode_data"
const leetCodeUsername = "vignaraj03"
export const leetCodeProfileDataQuery = `${leetCodeAPIUrl}/my_profile/${leetCodeUsername}`;
export const leetCodeProblemsSolvedQuery = `${leetCodeAPIUrl}/solvedProblemsCount/${leetCodeUsername}`;
export const leetCodeLanguagesSolvedQuery = `${leetCodeAPIUrl}/languageProblemsCount/${leetCodeUsername}`;
export const leetCodeCalendarDataQuery = `${leetCodeAPIUrl}/calendarData/${leetCodeUsername}`;

export const socialMediaLink = [
    {
        name:"LeetCode",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7",
        logo: leetCode
    },
    {
        name:"GitHub",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09",
        logo: github
    },
    {
        name:"LinkedIn",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f32430f12d8ca9dcf2b",
        logo: linkedin
    },
    {
        name:"Instagram",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f429631d5480b281d0a",
        logo: instagram
    },
    {
        name:"Hackerrank",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f5e2e1a11bdfd26cf33",
        logo: hackerrank
    },
]

export const socialMediaWhiteLink = [
    {
        name:"LeetCode",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7",
        logo: leetCodeWhite
    },
    {
        name:"GitHub",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09",
        logo: githubWhite
    },
    {
        name:"LinkedIn",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f32430f12d8ca9dcf2b",
        logo: linkedinWhite
    },
    {
        name:"Instagram",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f429631d5480b281d0a",
        logo: instagramWhite
    },
    {
        name:"Hackerrank",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f5e2e1a11bdfd26cf33",
        logo: hackerrankwhite
    },
]

export const education = [
    {
        year:"2020 - Present",
        name:"M.Sc. Software Systems",
        institute: "Coimbatore Institute of Technology, Coimbatore",
        grade: "8.55 (upto 8th sem)"
    },
    {
        year:"2018 - 2020",
        name:"Higher Secondary",
        institute: "Bharatiya Vidya Bhavan, Coimbatore",
        grade: "84 %"
    },
    // {
    //     year:"2018",
    //     name:"Secondary",
    //     institute: "Bharatiya Vidya Bhavan, Coimbatore",
    //     grade: "89 %"
    // },
]

export const workExp = [
    {
        name:"Software Engineer Intern",
        organisation: "Smartail Pvt. Ltd.",
        duration: "Jun 2023 - Nov 2023",
        location: "Chennai",
        desc:"Completed a 6-month internship at Smartail as a Software Engineer, developing full stack applications with Angular, Spring Boot, MongoDB, and Python."
    }
]