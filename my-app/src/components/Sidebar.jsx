"use client";

import React, { useState } from "react";
import Link from "next/link";
import menuData from "@/data/menuData";
import Image from "next/image";


export default function Sidebar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="sidebar-container">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          {menuData.categories.map((category) => (
            <div
              key={category.id}
              className="sidebar-item"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link href={category.href} className="nav-link">
                <span className="nav-icon"><Image
                    src={category.icon}
                    alt={category.name}
                    width={20}
                    height={20}

                />
                  </span>
                <span className="nav-text">{category.name}</span>
              </Link>

              {hoveredCategory === category.id && category.submenu && (
                <div className="submenu-panel">
                  {Object.entries(category.submenu).map(
                    ([title, items], idx) => (
                      <div key={idx} className="submenu-column">
                        <h4 className="submenu-title">{title}</h4>
                        <ul className="submenu-list">
                          {items.map((item, i) => (
                            <li key={i} className="submenu-item">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
