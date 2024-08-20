"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.75,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto  mt-[5rem] md:mt-11"
      >
        Hi, I'm{" "}
        <Highlight className="text-black dark:text-white">Shwetank</Highlight>,
        a Passionate Web Developer.
        <br />
        <Highlight className="text-black dark:text-white">
          Building Creative & Functional Web Experiences.
        </Highlight>
        <p className="font-normal text-sm mt-8 md:text-2xl">
          I specialize in building responsive, high-performance websites and
          applications using modern technologies like Reactjs, Node.js,
          Expressjs, MongoDB and TailwindCSS. Let's turn your ideas into reality
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}
