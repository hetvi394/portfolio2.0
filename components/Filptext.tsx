import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Websites", "Creation", "Apps" , "Projects"];

  return (
    <div className="h-[20rem] flex justify-center items-center">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        My
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
