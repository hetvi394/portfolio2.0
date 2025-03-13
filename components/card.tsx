import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "ToDoApp",
        description: "A simple and efficient task management app to organize daily activities.",
        link: "https://github.com/hetvi394/ToDoApp",
    },
    {
        title: "Tic-Tac-Toe",
        description: "A fun and interactive Tic-Tac-Toe game built with React.js.",
        link: "https://tic-tac-toe394.netlify.app/",
    },
    {
        title: "QR Code Generator",
        description: "A tool to generate custom QR codes for links and text easily.",
        link: "https://or-code-generator.netlify.app/",
    },
    {
        title: "Dictionary Website",
        description: "A web-based dictionary to search for word meanings and definitions.",
        link: "https://thedictionary-website.netlify.app/",
    },
];

