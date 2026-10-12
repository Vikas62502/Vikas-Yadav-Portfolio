"use client";

import { FC, useState } from "react";
import Link from "next/link";
import styles from "./experience.module.css";
import { ExperienceType } from "@/app/data/ExperienceData";

const ExperienceDetails: FC<ExperienceType> = ({
  id,
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  link,
  techStack,
}) => {
  const [isOpen, setIsOpen] = useState(id === 1);

  return (
    <div
      className={`${styles.experienceBox} ${isOpen ? styles.open : ""} cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.detailsBox}>
        <div className={styles.number}>
          <span>0{id}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.heading}>
            <p>{title}</p>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
              onClick={(e) => e.stopPropagation()}
            >
              {company} ↗
            </Link>
          </div>
          <div className={styles.dateLocation}>
            <p>
              {startDate} - {endDate}
            </p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide details −" : "View details +"}
      </button>
      <div className={styles.description}>
        <ul className={styles.unOrderedList}>
          {description.map((desc, index) => {
            const separator = desc.indexOf(": ");
            if (separator === -1) return <li key={index}> ◦ {desc}</li>;
            return (
              <li key={index}>
                {" "}◦ <strong>{desc.slice(0, separator)}:</strong> {desc.slice(separator + 2)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDetails;
