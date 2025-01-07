'use client'

import { useState } from "react";
import styles from "./styles.module.css";

type DropdownProps = {
  options: string[] | undefined; // Array of dropdown options
  label: string; // Label for the dropdown
  handleScent: (scent: string) => void;
};

export default function Dropdown({ options, label, handleScent }: DropdownProps) {
  const [selected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // const handleSelect = (value: string) => {
  //   setSelected(value);
  //   // handleVariantSelect(value);
  //   handleScentChange(value)
  //   setIsOpen(false); // Close the dropdown after selection
  // };

 
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