import SocialMediaSection from "../../Socials";
import styles from "./footer.module.css";

const index = () => {
  const year = new Date().getFullYear();
  const author = "Vikas Yadav";
  return (
    <div className={`${styles.footerBox} flex flex-col md:flex-row items-center justify-center`}>
      <p>© {year}. {author}</p>
      <div className="flex items-center justify-center my-3 md:my-0"> <SocialMediaSection /></div>
      <p>Developed by <span>{author}</span></p>
    </div>
  );
};

export default index;