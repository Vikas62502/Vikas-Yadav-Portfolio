"use client";

import { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOPICS = ["Full-time role", "Freelance project", "Collaboration", "Just saying hi"];

const validate = (form: FormState) => {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Please enter your name";
  if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "Please enter a valid email";
  if (!form.subject.trim()) errors.subject = "Pick a topic or write a subject";
  if (form.message.trim().length < 10) errors.message = "Tell me a little more (10+ characters)";
  return errors;
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState<{ name: string; email: string } | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      await axios.post("/api/sendMail", form, {
        headers: { "Content-Type": "application/json" },
      });
      setSentTo({ name: form.name.trim().split(" ")[0], email: form.email.trim() });
      setForm(EMPTY_FORM);
      setStatus("success");
    } catch (error) {
      console.log("error: ", error);
      setStatus("error");
    }
  };

  return (
    <div className={styles.composer}>
      <div className={styles.composerHeader}>
        <span className={styles.avatar}>VY</span>
        <div className={styles.composerMeta}>
          <p>Message Vikas</p>
          <span>
            <i className={styles.onlineDot}></i>
            Online · usually replies within a day
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" && sentTo ? (
          <motion.div
            key="success"
            className={styles.thread}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.incoming}>
              Got a role, a project, or a question? Drop it here — it goes straight to my inbox.
            </div>
            <motion.div
              className={styles.outgoing}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              Message sent. I&apos;ll reply to {sentTo.email}.
            </motion.div>
            <div className={styles.delivered}>
              <motion.span
                className={styles.successIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                  />
                </svg>
              </motion.span>
              <div>
                <p>Delivered, {sentTo.name}.</p>
                <small>Thanks — I&apos;ll get back to you soon.</small>
              </div>
            </div>
            <button type="button" className={styles.secondaryButton} onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className={styles.incoming}>
              Got a role, a project, or a question? Drop it here — it goes straight to my inbox.
            </div>

            <div className={styles.topics}>
              <span className={styles.fieldLabel}>What&apos;s this about?</span>
              <div className={styles.topicChips}>
                {TOPICS.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className={`${styles.topicChip} ${form.subject === topic ? styles.topicActive : ""}`}
                    onClick={() => update("subject", topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Your name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Your email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Subject</span>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                placeholder="Full Stack Engineer role at Acme"
                className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
              />
              {errors.subject && <span className={styles.error}>{errors.subject}</span>}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Message</span>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Write your message..."
                rows={5}
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </label>

            {status === "error" && (
              <p className={styles.formError}>
                Couldn&apos;t send just now. Your text is still here — try again or email me at{" "}
                <a href="mailto:vikasyadav62502@gmail.com">vikasyadav62502@gmail.com</a>.
              </p>
            )}

            <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <span className={styles.spinner}></span> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane aria-hidden /> Send message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
