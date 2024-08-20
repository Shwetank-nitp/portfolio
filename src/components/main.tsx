"use client";

import { GlareCard } from "./ui/glare-card";
import {
  express_logo,
  js_logo,
  mongo_logo,
  nodejs_logo,
  react_logo,
  tailwindcss_logo,
} from "@/../public/index";

export default function Main() {
  const skills = [
    {
      name: "Javascript",
      type: "Programming Language",
      logo: js_logo,
    },
    {
      name: "ReactJs",
      type: "Frontend Framework",
      logo: react_logo,
    },
    {
      name: "tailwindcss",
      type: "CSS Utiliy",
      logo: tailwindcss_logo,
    },
    {
      name: "NodeJs",
      type: "Backend",
      logo: nodejs_logo,
    },
    {
      name: "ExpressJs",
      type: "Backend Framework",
      logo: express_logo,
    },
    {
      name: "MongoDB",
      type: "Database",
      logo: mongo_logo,
    },
  ];

  return (
    <div className="min-h-screen">
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600 font-bold text-center my-11">
        My Skill
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(0,300px))] gap-4 justify-center m-auto md:w-[75vw] items-center">
        {skills.map((item, index) => (
          <GlareCard
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img src={item.logo.src} width={100} alt="logo" />
            {item.name}
            <p className="text-white font-bold text-xl mt-4">{item.type}</p>
          </GlareCard>
        ))}
      </div>
    </div>
  );
}
