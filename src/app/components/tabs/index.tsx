'use client'

import React, { useState } from "react";
import styles from "./styles.module.css";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  return (
    <div className={styles.tabsContainer}>
      {/* Tab Buttons */}
      <div className={styles.tabButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}