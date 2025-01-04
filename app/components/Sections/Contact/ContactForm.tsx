"use client";

import { useRef, useState } from "react";
import styles from "./contact.module.css";
import axios, { isCancel } from "axios";
import SuccessModal from "../../SuccessModal";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    }

    // validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true)

    try {
      const url = "/api/sendMail";
      const body = formData;
      await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      setIsSuccess(true)
    } catch (error) {
      console.log("error: ", error);

    } finally {
      // Clear the form
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      subjectRef.current!.value = "";
      messageRef.current!.value = "";
      setLoading(false)
    }
  };



  return (
    <div className={styles.formBox} >
      <form onSubmit={handleSubmit}>
        <div className={styles.nameEmail}>
          <input ref={nameRef} type="text" placeholder="Full name" className={styles.input} />
          <input ref={emailRef} type="email" placeholder="Email" className={styles.input} />
        </div>
        <input ref={subjectRef} type="text" placeholder="Subject" className={styles.input} />
        <div>
          <textarea ref={messageRef} placeholder="Message" rows={3} className={styles.input} ></textarea>
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>{loading ? "Please wait ..." : "Send"}</button>
      </form>
      <div >
        <SuccessModal isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
      </div>

    </div >
  );
};

export default ContactForm;