import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Separator from "../components/Separator";

import type { NextPage } from "next";
const Home: NextPage = () => {
  const Title = dynamic(() => import("../components/Title"), { ssr: true });
  const Download = dynamic(() => import("../components/Download"), {
    ssr: false,
  });

  return (
    <div className="h-full w-fit  bg-gray-900 text-white lg:px-40 ">
      <Head>
        <title>Jitu Nayak</title>
      </Head>
      <div className="flex flex-col">
        <Suspense fallback={`Loading...`}>
          <Title />
        </Suspense>
        <Separator />
        <Experience />
        <Separator />
        <Projects />
        <Separator />
        <Download />
        <footer className="flex justify-center border-t-2 border-zinc-700 py-10">
          <a
            href="https://github.com/jitunayak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thank you for visiting my profile
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
