'use client';

import React, { useContext } from 'react';
import SideNavLink from './SideNavLink';
import NavContext from "@/components/NavProvider/nav-context";

interface SideNavProps {
  children?: React.ReactNode;
}

const pages = [
  { Name: "Tiles", url: "tile-layout" },
  { Name: "Form", url: "form-layout" },
  { Name: "Article", url: "article-layout" },
  { Name: "List", url: "list-layout" }
];

export default function SideNav({ children }: SideNavProps) {
  const { isSideNavOpen, toggleSideNav } = useContext(NavContext);

  const handleLinkClick = () => {
    toggleSideNav();
  };

  return (
    <div className={`fixed top-0 left-0 z-50 min-h-screen bg-white border-r border-neutral-200 flex flex-col transition-all duration-300
      ${isSideNavOpen ? 'w-[240px]' : 'w-0'} 2xl:relative 2xl:w-[240px] 2xl:block overflow-hidden`}>
      <div className="p-6 font-bold pb-1 flex items-center justify-between">
        <span>Responsive Demo</span>
        <span className="cursor-pointer 2xl:hidden" onClick={toggleSideNav}>✖️</span>
      </div>
      <div className="pl-6 pb-6 text-neutral-400">Mark Banaria</div>
      <div className="pl-6 text-neutral-700">1. Select a Layout</div>
      <div className="pl-6 pb-6 text-neutral-700">2. Resize Your Window</div>
      <nav>
        <ul className="space-y-2 p-4">
          {pages.map((item, index) => (
            <SideNavLink
              key={index}
              name={item.Name}
              link={`/${item.url}`}
              className="hover:bg-neutral-100 rounded-md p-2"
              onClick={handleLinkClick}
            />
          ))}
        </ul>
      </nav>
      {children && <div className="mt-auto p-4">{children}</div>}
    </div>
  );
}
