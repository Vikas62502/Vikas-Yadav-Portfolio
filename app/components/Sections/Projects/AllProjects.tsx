"use client"

import { ProjectsData } from "@/app/data/ProjectsData";
import styles from "./projects.module.css";
import { useState } from "react";
import Project from "./Project";
import { DownArrowIcon, DownloadIcon, UpArrowIcon } from "@/app/assets/Icons";

const AllProjects = () => {
  // getting all tags from the data
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showNext, setShowNext] = useState<number>(3);
  console.log(showNext, "<--- show next");
  const allTags = Array.from(new Set(ProjectsData.flatMap((item) => item.tags)));

  // Handle toggling of tags
  const toggleTag = (tag: string) => {
    // if tag is already included in previous tag then remove it else add it
    setSelectedTags((prevSelectedTags: string[]) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t: string) => t !== tag) // Deselect tag
        : [...prevSelectedTags, tag] // Select tag
    );
  };

  // Filter items based on selected tags
  const filteredItems = ProjectsData.filter((item) => {
    if (selectedTags.length === 0) return true; // If no tags selected, show all items
    for (const tag of selectedTags) {
      if (!item.tags.includes(tag)) {
        return false; // If any selected tag is not in item tags, exclude the item
      }
    }
    return true; // Include the item if all selected tags are in item tags
  });

  const toggleAllTags = () => {
    setSelectedTags([]);
  };

  const handleShowMoreProjects = () => {
    if (ProjectsData?.length > showNext) {
      setShowNext(showNext + 3);
    }
    if (showNext === ProjectsData?.length) {
      setShowNext(showNext - 6);
    }
  };

  return (
    <div className={styles.allProjects}>
      <div className={`${styles.tagButtons} max-w-7xl mx-auto`}>
        <button
          onClick={() => toggleAllTags()}
          className={styles.buttonTag}
          style={{
            backgroundColor: selectedTags.length === 0 ? "crimson" : "transparent",
          }}
        >All</button>
        {
          allTags.map((tag: string) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={styles.buttonTag}
              style={{
                backgroundColor: selectedTags.includes(tag) ? "crimson" : "transparent",
              }}
            >
              {tag}
            </button>
          ))
        }
      </div>

      {
        filteredItems?.length > 0 ? (
          <div className={styles.project}>
            {
              filteredItems?.slice(0, showNext)?.map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  images={project.images}
                  liveLink={project.liveLink}
                  gitHubLink={project.gitHubLink}
                  TechStack={project.TechStack}
                />
              ))
            }
            <div className={styles.button2} onClick={handleShowMoreProjects}>
              <span>{showNext === ProjectsData?.length ? "Collapse" : "Show More"}</span>
              {showNext !== ProjectsData?.length ? <UpArrowIcon /> : <DownArrowIcon />}
            </div>
          </div>
        ) : (
          <div className={styles.notFound}>
            <p>No projects match the selected tags.</p>
          </div>
        )
      }
    </div>
  );
};

export default AllProjects;