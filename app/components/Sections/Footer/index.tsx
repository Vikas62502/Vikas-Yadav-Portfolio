import Link from "next/link";
import SocialMediaSection from "../../Socials";
import styles from "./footer.module.css";

const index = () => {
  const year = new Date().getFullYear();
  const author = "Vikas Yadav";
  return (
    <footer className={styles.footerWrap}>
      <div className={`${styles.footerBox} flex flex-col md:flex-row items-center justify-center`}>
        <p>© {year}. {author} — Full Stack Engineer</p>
        <div className="flex items-center justify-center my-3 md:my-0">
          <SocialMediaSection />
        </div>
        <p>Open to full-time roles · New Delhi / Remote</p>
      </div>
      <nav className={styles.footerLinks} aria-label="Footer">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/Vikas_Yadav_Full_Stack_Resume.pdf" target="_blank">Resume</Link>
        <Link href="https://www.linkedin.com/in/vikasyadav62/" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/Vikas62502" target="_blank">GitHub</Link>
      </nav>
    </footer>
  );
};

export default index;
