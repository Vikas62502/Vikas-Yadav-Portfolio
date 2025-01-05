"use client"

import { ArrowIcon, DownloadIcon } from "@/app/assets/Icons";
import styles from "@/app/components/Sections/HeroSection/heroSection.module.css";
import Link from "next/link";
import { resumeLink } from "@/app/data/HeroData";
import SocialMediaSection from "../../Socials";


const index = () => {

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.blob}></span>
        <div className={styles.box}>
          <div
            className={styles.content}
          >
            <h2>{`Hello! I'm Vikas Yadav`}</h2>
            <h1>Full Stack Developer</h1>
            <p>Building the web with passion and precision.</p>
            <div className={styles.buttons}>
              <Link href="https://github.com/Vikas62502" target="_blank">
                <div className={styles.button}>
                  <span>{`Github`}</span>
                  <ArrowIcon />
                </div>
              </Link>
              <Link target="_blank" href={resumeLink}>
                <div className={styles.button2}>
                  <span>Get Resume</span>
                  <DownloadIcon />
                </div>
              </Link>
            </div>
            <div className="pt-32">
              <SocialMediaSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;