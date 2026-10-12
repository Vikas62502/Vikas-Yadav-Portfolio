"use client";

import { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
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

const LogLine = ({ step, children }: { step: number; children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.35 + step * 0.35 }}
  >
    {children}
  </motion.p>
);

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
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span></span><span></span><span></span>
        <p>~/contact/send-message.ts</p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" && sentTo ? (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.successIcon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </svg>
            </motion.div>
            <div className={styles.log}>
              <LogLine step={0}><span className={styles.prompt}>$</span> POST /api/sendMail</LogLine>
              <LogLine step={1}><span className={styles.ok}>✓ 200 OK</span> — message delivered</LogLine>
              <LogLine step={2}>
                <span className={styles.prompt}>&gt;</span> Thanks {sentTo.name}! I&apos;ll reply to{" "}
                <span className={styles.highlight}>{sentTo.email}</span> soon.
              </LogLine>
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
            <div className={styles.topics}>
              <span className={styles.fieldLabel}>{"// what's this about?"}</span>
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
                <span className={styles.fieldLabel}>name</span>
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
                <span className={styles.fieldLabel}>email</span>
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
              <span className={styles.fieldLabel}>subject</span>
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
              <span className={styles.fieldLabel}>message</span>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell me about the role, team or project..."
                rows={5}
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </label>

            {status === "error" && (
              <p className={styles.formError}>
                <span className={styles.errorCode}>✗ 500</span> Something went wrong sending your message.
                Your text is still here — try again or email me at{" "}
                <a href="mailto:vikasyadav62502@gmail.com">vikasyadav62502@gmail.com</a>.
              </p>
            )}

            <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <span className={styles.spinner}></span> Sending...
                </>
              ) : (
                <>Send message <span aria-hidden>→</span></>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
