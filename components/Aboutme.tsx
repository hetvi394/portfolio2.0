/* eslint-disable react/no-unescaped-entities */
"use client";

 import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      
      title: "AboutMe",
      value: "product",
      content: (
        <div id="about" className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-violet-900 select-none">
          <p className="text-xl md:text-4xl">AboutMe</p>
          <p className="text-sm mt-4 md:text-base font-sans text-purple">
          I'm Hetvi Shah, a frontend developer with a passion for crafting sleek, responsive, and user-friendly web applications. With expertise in React.js, Tailwind CSS, and modern UI/UX principles, I transform designs into interactive digital experiences.
           Beyond frontend, I have hands-on experience in backend development using Node.js, Express, and MongoDB, allowing me to build and manage APIs efficiently. My journey into full-stack development is ongoing as I continuously explore new technologies and best practices to enhance performance and scalability.
          </p>
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Skills",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black  bg-white-100">
          <p className="text-xl md:text-4xl">Skills</p>
          <div className="text-sm  mt-4 md:text-base flex flex-wrap justify-center gap-2">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "TailwindCSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "MongoDB",
              "Figma",
              "Git",
              "Github"
            ].map((skill) => (
              <div
                key={skill}
                className="relative font-serif inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 select-none">
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-6 py-3 text-xs md:text-sm font-medium text-white backdrop-blur-lg">
                  {skill}
                </span>
              </div>
            ))}
            </div>
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Eduction",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-violet-900 select-none">
          <p>Education</p>
          <p className="text-base font-sans text-purple mt-4">Bachelor's in Computer Applications</p>
          <p className="text-base font-sans">Silver Oak University — 2024</p>

          <p className="text-base font-sans text-purple mt-4">Master's in Computer Applications (Ongoing) </p>
          <p className="text-base font-sans">Silver Oak University — Expected 2026</p>
          {/* <DummyContent /> */}
        </div>
      ),
},
  ];

  return (
    <div className="h-[35rem] md:h-[25rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}