"use client";

import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import clsx from "clsx";

import AboutIllustrator from "@/public/about-illustrator.svg";
import { Mulish } from "next/font/google";
import Technology from "./components/technology";
import ProjectLink from "./components/project-link";
import { TbMapSearch } from "react-icons/tb";
import { MdInfoOutline, MdOutlineEmail } from "react-icons/md";
import { projects } from "./constants/project-list";
import { techStack } from "./constants/tech-stack";
import { socialLinks } from "./constants/social-links";
import { navItems } from "./constants/navlist";
import MobileSidebar from "./components/mobile-sidebar";
import { Tooltip } from "@mantine/core";
import { ImDeviantart } from "react-icons/im";
import { AnimatedText } from "./components/animated-text";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { useEffect } from "react";

const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px sold ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <main className="bg-white">
      <nav className="flex fixed z-10 w-full top-0 items-center shadow-sm px-10 py-[15px] bg-gray-950 text-primary justify-between">
        <h3 className="font-bold text-[20px] text-tunes-heading cursor-pointer">
          <a href="#home">
            <ImDeviantart size={40} className="rotate-45" color="#e8e8e8" />
          </a>
        </h3>
        <ul className="flex max-[520px]:hidden items-center gap-[2rem]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-[#e8e8e8] text-[14px] font-semibold transition-all duration-[.23s]"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <MobileSidebar />
      </nav>
      <motion.section
        id="home"
        className="min-h-screen py-[80px] flex items-center bg-gray-950"
        style={{
          backgroundImage,
        }}
      >
        <section className="flex gap-[10rem] flex-col app-container">
          <div className="flex justify-between max-[835px]:pt-10 max-[835px]:flex-col-reverse items-center gap-4">
            <div className="flex gap-6 max-w-[55rem] flex-col ">
              <h1 className="text-[#e8e8e8] text-[clamp(2rem,4vw,4rem)] leading-[1.2] font-bold text-center">
                Software Engineer 👋
              </h1>
              <AnimatedText
                text="Hi, I'm Daneil Momodu. A passionate Software Engineer based
                in Lagos, Nigeria."
                el="h4"
                className="text-[clamp(1.2rem,2vw,2rem)] font-semibold text-[#e8e8e8]  relative block  text-center"
                repeatDelay={10000}
              />
              {/* <h4 className="text-tunes-subheading font-medium text-primary leading-[1.6]">
                Hi, I&apos;m Prosper Jaja. A passionate Software Engineer based
                in Ibadan, Nigeria.
              </h4> */}
              <div className="flex items-center gap-[1.3rem] justify-center mx-auto">
                {socialLinks.map(({ Icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    className="transition-all cursor-pointer hover:text-tunes-link duration-[0.2s] text-[3rem] text-[#e8e8e8]"
                  >
                    <Icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[3rem] flex-wrap text-primary text-tunes-paragraph justify-center mx-auto">
            <p className="font-semibold whitespace-nowrap pr-[1.5rem] text-[#e8e8e8] border-r-2 border-r-[#e8e8e8]">
              Tech Stack
            </p>
            {techStack.map((item, idx) => (
              <span key={idx}>
                <Image
                  width={90}
                  height={50}
                  className="h-[5rem] cursor-pointer hover:translate-y-[-1rem] w-[9rem] duration-[0.3s] ease-in-out transition-all"
                  src={item}
                  alt="skill-icon"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </section>
      </motion.section>
      <section id="about" className="py-[15rem] bg-white">
        <div className="app-container max-[800px]:flex-col max-[800px]:gap-6 flex items-center">
          <div className="flex-1 relative max-md:hidden">
            <div
              style={{
                background: `url("/development.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-[80%] h-[35rem] rounded-[1.7rem] max-md:gap-10"
            />
            <span className="w-[19rem] h-[19rem] bottom-[-33px] shadow-sm right-[30px] rounded-[50%] bg-white absolute">
              <Image
                src={AboutIllustrator}
                className="about-image"
                alt="about section illustration"
              />
            </span>
          </div>
          <div
            style={{
              background: `url("/development.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-[95%] h-[35rem] rounded-[1.7rem] max-md:flex hidden max-md:mt-[-10rem]"
          />
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <h3 className="section-heading">ABOUT ME</h3>
              <h4 className="section-subheading">
                Passionate Software Engineer
                <br />
                <span>Thriving in Lagos, Nigeria 🌐</span>
              </h4>
              <p
                className={`text-primary text-justify text-tunes-paragraph font-medium leading-[1.5] ${mulish.className}`}
              >
                Highly detail-oriented and goal-driven Software Engineer with 4+
                years of professional experience building sophisticated web
                applications and user-centric platforms. Proficient in modern
                web development technologies, including HTML5, CSS3, Tailwind
                CSS, JavaScript, TypeScript, React.js, Next.js, Git, and UI
                component libraries like Mantine, Material UI, and ShadCN. Adept
                at leading teams and collaborating across functions to deliver
                innovative solutions. A graduate of Computer Science with a
                solid foundation in technical problem-solving and a passion for
                creating exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-[15rem] bg-tunes-hero">
        <div className="app-container flex gap-[6rem] flex-col">
          <div className="flex flex-col gap-[1rem]">
            <h3 className="section-heading">PORTFOLIO</h3>
            <h4 className="section-subheading">
              Each project is a unique piece of development 🧩
            </h4>
          </div>
          <section className="flex flex-col gap-[5rem]">
            {projects?.map((item, idx) => (
              <div
                key={idx}
                className={clsx(
                  idx % 2 ? "bg-gray-950" : "bg-white",
                  " shadow-lg flex items-center max-[800px]:flex-col gap-[8rem] p-[2rem] rounded-[1.7rem] group"
                )}
              >
                <div className="w-[50%] h-full max-[800px]:w-full rounded-[1.7rem] bg-tunes-project overflow-hidden shadow-lg">
                  <a href={item.liveLink} target="_blank">
                    <Image
                      src={item.image}
                      width={530}
                      height={530}
                      alt="project"
                      className="h-auto w-full group-hover:scale-110 duration-200"
                      // style={{
                      //   transition: "transform 10s ease-in-out 0s",
                      // }}
                    />
                  </a>
                </div>
                <div className="flex  flex-col max-[800px]:w-full gap-[30px] h-full w-[50%] overflow-auto items-center">
                  <div className="flex w-full flex-col gap-5">
                    <h3
                      className={clsx(
                        idx % 2
                          ? "text-[#e8e8e8] underline"
                          : "text-tunes-heading",
                        "flex items-center gap-[0.2rem] font-bold  text-primary"
                      )}
                    >
                      {item.name}
                      {item.info && (
                        <Tooltip label={item.info}>
                          <span className="cursor-pointer hover:text-tunes-link">
                            <MdInfoOutline />
                          </span>
                        </Tooltip>
                      )}
                    </h3>
                    <p
                      className={clsx(
                        idx % 2 ? "text-[#e8e8e8]" : "text-tunes-paragraph",
                        " font-medium text-primary"
                      )}
                    >
                      {item.description}
                    </p>
                    <div className="flex flex-wrap w-full px-2 gap-[1rem]">
                      {item.technologies.map((el, id) => (
                        <Technology key={id} tech={el} />
                      ))}
                    </div>
                  </div>
                  <ProjectLink
                    sourceCode={item.codeLink}
                    live={item.liveLink}
                    idx={idx}
                  />
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section id="contact" className="py-[11rem] bg-white">
        <div className="app-container flex gap-[6rem] flex-col">
          <div className="flex flex-col gap-[1rem]">
            <h3 className="section-heading">CONTACT</h3>
            <p className="section-subheading">Hit me up! 👇</p>
          </div>
          <div className="flex items-center gap-[8rem] flex-wrap">
            <div className="flex items-center gap-[1.5rem]">
              <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
                <TbMapSearch size={30} />
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-tunes-heading font-bold text-primary">
                  Location
                </h3>
                <p className="text-tunes-paragraph text-primary">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1.5rem]">
              <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
                <MdOutlineEmail size={30} />
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-tunes-heading font-bold text-primary">
                  Mail
                </h3>
                <a
                  href="mailto:momodudaniel39@gmail.com"
                  target="_blank"
                  className="text-tunes-paragraph hover:text-tunes-link text-primary"
                  style={{ wordBreak: "break-word" }}
                >
                  momodudaniel39@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-950 py-[3rem]">
        <div className="app-container flex max-[405px]:flex-col max-[405px]:gap-8 items-center justify-between">
          <h3 className="text-primary text-white text-center font-bold">
            Copyright © 2024. All rights are reserved
          </h3>
          <span className="flex items-center gap-[2rem]">
            {socialLinks.map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                style={{ transition: "all .2s ease-in-out" }}
                className="cursor-pointer text-white hover:scale-[1.2] text-[2.3rem]"
              >
                <Icon size={36} />
              </a>
            ))}
          </span>
        </div>
      </footer>
    </main>
  );
}
