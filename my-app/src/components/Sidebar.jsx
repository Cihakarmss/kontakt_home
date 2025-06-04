"use client";

import React, { useState } from 'react';
import Link from 'next/link';


const menuData = {
  categories: [
    { id: 1, name: 'Kondisionerlər', icon: '🏠', href: '/kondisionerler' },
    { id: 2, name: 'Smartfonlar və aksesuarları', icon: '📱', href: '/smartfonlar', active: true },
    { id: 3, name: 'Smart qadjetlər', icon: '⌚', href: '/smart-qadjetler' },
    { id: 4, name: 'Notbuklar, PK, planşetlər', icon: '💻', href: '/notbuklar' },
    { id: 5, name: 'Geyimlər üçün məhsullar', icon: '👕', href: '/geyimler' },
    { id: 6, name: 'TV, audio və foto', icon: '📺', href: '/tv-audio' },
    { id: 7, name: 'Mətbəx texnikası', icon: '🍳', href: '/metbex' },
    { id: 8, name: 'Ev texnikası', icon: '🏡', href: '/ev-texnikasi' },
    { id: 9, name: 'Qab-qacaq', icon: '🍽️', href: '/qab-qacaq' },
    { id: 10, name: 'Gözəllik və sağlamlıq texnikası', icon: '💄', href: '/gozellik' },
    { id: 11, name: 'İdman və əyləncə', icon: '⚽', href: '/idman' },
    { id: 12, name: 'Təmir tikinti', icon: '🔨', href: '/temir' },
    { id: 13, name: 'Avtomobil məhsulları', icon: '🚗', href: '/avtomobil' },
    { id: 14, name: 'Mebel və tekstil', icon: '🛋️', href: '/mebel' },
  ]
};



export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState(2);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
       
        
        <nav className="sidebar-nav">
          {menuData.categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`nav-item ${category.active || activeCategory === category.id ? 'nav-item-active' : ''}`}
              onClick={() => {
                setActiveCategory(category.id);
                setIsOpen(false);
              }}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-text">{category.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}