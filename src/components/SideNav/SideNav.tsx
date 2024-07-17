import React from 'react';
import ResponsiveSection from "../ResponsiveSection/ResponsiveSection";
import SideNavLink from './SideNavLink';

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
  return (
    <div className="min-h-screen w-[0px] overflow-hidden 2xl:w-[240px] bg-white border-r border-neutral-200 flex flex-col">
      <div className="p-6 font-bold pb-1">Responsive Demo</div>
      <div className="pl-6 pb-6 text-neutral-400">Mark Banaria</div>
      <div className="pl-6 text-neutral-700">1. Select a Layout</div>
      <div className="pl-6 pb-6 text-neutral-700">2. Resize Your Window</div>
      <nav>
        <ul className="space-y-2 p-4">
          {pages.map((item, index) => (
            <SideNavLink key={index} name={item["Name"]} link={`/${item["url"]}`} className="hover:bg-neutral-100 rounded-md p-2">
            </SideNavLink>
          ))}
        </ul>
      </nav>
      {children && <div className="mt-auto p-4">{children}</div>}
    </div>
  );
}
