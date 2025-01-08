"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { Arrow } from "@/app/icons/arrow";

type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={`${styles.title} ${
              activeIndex === index ? styles.active : styles.inactive
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title} <Arrow />
          </button>
          <div
            className={`${styles.content} ${
              activeIndex === index ? styles.expanded : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
