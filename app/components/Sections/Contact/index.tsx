import styles from './contact.module.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const index = () => {
  return (
    <section id='contact' className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <span className={styles.eyebrow}>{"// contact"}</span>
        <h3>{`Let's build something`}</h3>
        <p>
          {`Hiring for a full stack role or building something ambitious? Drop a message — it lands straight in my inbox.`}
        </p>
      </div>
      <div className={styles.contactBox}>
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default index;
