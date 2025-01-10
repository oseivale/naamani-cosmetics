'use client'

import { useState } from "react";
import styles from "./styles.module.css";
import { DropdownProps } from "@/app/types/dropdown";

export default function Dropdown({ options, label, handleScent }: DropdownProps) {
  const [selected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <label className={styles.label}>{label}</label>
      <button
        className={styles.selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected || "Select an option"}{" "}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className={styles.options}>
          {options?.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              // onClick={() => handleSelect(option)}
              onClick={() => handleScent(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}