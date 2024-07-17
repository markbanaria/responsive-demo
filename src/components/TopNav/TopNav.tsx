'use client';

import { useContext } from 'react';
import ResponsiveSection from "../ResponsiveSection/ResponsiveSection";
import NavContext from "@/app/nav-context";

interface TopNavProps {
  children: string;
}

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function TopNav({ children }: TopNavProps) {
  const { toggleSideNav } = useContext(NavContext);

  return (
    <>
      <div className="h-20 bg-white border-b border-neutral-200">
        <ResponsiveSection className="flex flex-col h-full">
          <div className="grow"></div>
            <div className="flex flex-row">
              <div className="p-4 2xl:hidden cursor-pointer" onClick={toggleSideNav}>☰</div>
              <div className="p-4 pl-0 font-bold">{children}</div>
            </div>
          <div className="grow"></div>
        </ResponsiveSection>
      </div>
    </>
  );
}
