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
        title: "TicTacToe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
        "A technology company that builds economic infrastructure for the internet.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
        "A technology company that builds economic infrastructure for the internet.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
        "A technology company that builds economic infrastructure for the internet.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
        "A technology company that builds economic infrastructure for the internet.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
        "A technology company that builds economic infrastructure for the internet.",
        link: "https://microsoft.com",
    },
    
];
