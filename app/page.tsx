"use client";

import styles from "./page.module.css";
import HeroSection from "@/app/components/Sections/HeroSection";
import About from "@/app/components/Sections/About";
import Experience from "@/app/components/Sections/Experience";
import Skills from "@/app/components/Sections/Skills";
import TechStack from "@/app/components/Sections/TechStack";
import Services from "@/app/components/Sections/Services";
import Projects from "@/app/components/Sections/Projects";
import Contact from "@/app/components/Sections/Contact";
import Footer from "@/app/components/Sections/Footer";
import Loader from "@/app/components/Loader/Loader";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import GithubContributionGraph from "./components/Github/GitHubContributions";
import Impact from "@/app/components/Sections/Impact";
import Reveal from "@/app/components/Reveal";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (<div className={styles.page}>
        <HeroSection />
        <Impact />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><TechStack /></Reveal>
        <Skills />
        <Reveal><Services /></Reveal>
        <Reveal><GithubContributionGraph /></Reveal>
        <Reveal><Contact /></Reveal>
        <Footer />
      </div>)}
    </>
  );
}
