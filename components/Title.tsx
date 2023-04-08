import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
export default function Title() {
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.04,
      },
    },
  };

  const line1 = "Hi I am Jitu Nayak";
  const line2 = "Full stack Developer";
  const line3 = "Based in Banglore, India 🇨🇮🇳";

  return (
    <>
      {/* <Image src={techstack_banner} className=" bg-yellow-400" alt="banner" /> */}

      <div className="mt-20 flex scale-100 flex-row items-center justify-between rounded bg-gradient-to-r from-blue-600 to-red-400 px-10 py-10 shadow-md shadow-slate-500 transition duration-1000  hover:shadow-lg hover:shadow-slate-300">
        <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute -bottom-0 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

        <div className="flex flex-col justify-center">
          <div className="absolute mt-48 ml-1 h-20 w-20 rounded-full ring-2 ring-amber-400">
            <Image
              src="https://avatars.githubusercontent.com/u/35754866?v=4"
              alt="@jitunayak"
              height="100"
              width="100"
              data-view-component="true"
              className="rounded-full"
            ></Image>
          </div>
          <motion.h3
            className="py-20"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            <div className="my-1 text-2xl font-medium">
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
            <div className="my-1  text-3xl font-bold sm:text-4xl md:text-6xl xl:text-7xl">
              {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
            <div className="my-1 text-3xl">
              {line3.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
          </motion.h3>

          {/* <span className="my-10 text-2xl">
          Hi, I am a Fullstack Software Developer
        </span>
        <span className="text-6xl">Er.Jitu Nayak</span>
        <span className="py-4 text-base">based in Banglore, INDIA</span> */}
          <button
            className=" z-10 mt-4 flex w-fit flex-row items-center  justify-center rounded-sm bg-yellow-400 py-2 px-6  font-sans font-semibold text-zinc-900 hover:bg-white"
            onClick={() => alert("Not yet added")}
          >
            <FiDownload className="mr-2 h-5 w-5" /> Download My Resume
          </button>
        </div>
        <div className="z-10 space-y-2">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jitunayak715@gmail.com&tf=1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="my-3 flex w-fit items-center">
              <FiMail className="mr-2 h-5 w-5" /> jitunayak715@gmail.com
            </div>
          </a>
          <a
            href="https://github.com/jitunayak"
            target="_blank"
            rel="noreferrer"
          >
            <div className="my-3 flex w-fit items-center">
              <FiGithub className="mr-2 h-5 w-5" />
              github.com/jitunayak
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/jitu-nayak/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="my-3 flex w-fit items-center">
              <FiLinkedin className="mr-2 h-5 w-5" />
              Linkedin
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
