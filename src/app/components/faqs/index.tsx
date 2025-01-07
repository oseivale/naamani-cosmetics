'use client'

import { useState } from "react";
import styles from "./styles.module.css";

type AccordionItem = {
  title: string;
  content: string | JSX.Element;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function FAQ({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className={styles.accordionSymbol}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.expanded : ""
            }`}
          >
            {activeIndex === index && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}