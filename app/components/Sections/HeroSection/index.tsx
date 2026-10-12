"use client"

import { ArrowIcon, DownloadIcon } from "@/app/assets/Icons";
import styles from "@/app/components/Sections/HeroSection/heroSection.module.css";
import Link from "next/link";
import SocialMediaSection from "../../Socials";
import { Stats } from "@/app/data/AboutData";
import RotatingText from "./RotatingText";

const stackLayers = ["Frontend", "Backend", "Databases", "Cloud & DevOps"];

const buildWords = [
  "scalable REST APIs",
  "real-time dashboards",
  "payment systems",
  "bank integrations",
  "cloud infrastructure",
];

const index = () => {

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.grid}></div>
      <div className={styles.container}>
        <span className={styles.blob}></span>
        <div className={styles.box}>
          <div
            className={styles.content}
          >
            <span className={styles.availability}>
              <span className={styles.dot}></span>
              <span>
                Open to opportunities<span className="hidden sm:inline"> · New Delhi, India · Open to relocation</span>
              </span>
            </span>
            <h2>{`Hello! I'm Vikas Yadav`}</h2>
            <h1>Full Stack Engineer</h1>
            <div className={styles.rotatingLine}>
              <span>I build</span>
              <RotatingText words={buildWords} className={styles.rotatingWord} />
            </div>
            <p>
              End-to-end products — pixel-perfect React &amp; Next.js interfaces,
              scalable Node.js APIs, PostgreSQL data models and AWS infrastructure.
            </p>
            <p className={styles.currently}>
              Currently <strong>Full Stack Engineer @ Chairbord</strong> · built the entire backend of its FASTag platform
            </p>
            <div className={styles.layers}>
              {stackLayers.map((layer, i) => (
                <span key={layer} className={styles.layer}>
                  <span className={styles.layerIndex}>{`0${i + 1}`}</span>
                  {layer}
                </span>
              ))}
            </div>
            <div className={styles.buttons}>
              <Link href="https://github.com/Vikas62502" target="_blank">
                <div className={styles.button}>
                  <span>{`Github`}</span>
                  <ArrowIcon />
                </div>
              </Link>
              <Link href="#contact">
                <div className={styles.button}>
                  <span>{`Hire Me`}</span>
                </div>
              </Link>
              <Link href={`./Vikas_Yadav_Full_Stack_Resume.pdf`} target="_blank" download>
                <div className={styles.button2}>
                  <span>Get Resume</span>
                  <DownloadIcon />
                </div>
              </Link>
            </div>
            <div className={styles.stats}>
              {Stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <SocialMediaSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
