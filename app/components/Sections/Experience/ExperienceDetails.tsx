"use client";

import { FC } from "react";
import Link from "next/link";
import styles from "./experience.module.css";

interface ExperienceDetailsProps {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  link: string;
}

const ExperienceDetails: FC<ExperienceDetailsProps> = ({
  id,
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  link,
}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div key={id} className={`${styles.experienceBox} cursor-pointer`}>
        <div className={styles.detailsBox}>
          <div className={styles.number}>
            <span>0{id}</span>
          </div>
          <div className={styles.details}>
            <div className={styles.heading}>
              <p>{title}</p>
              <p>{company}</p>
            </div>
            <div className={styles.dateLocation}>
              <p>
                {startDate} - {endDate}
              </p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <ul className={styles.unOrderedList}>
            {description.map((desc, index) => (
              <li key={index} > ◦ {desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link >
  );
};

export default ExperienceDetails;