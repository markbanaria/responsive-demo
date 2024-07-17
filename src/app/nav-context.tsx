'use client';

import { createContext, useState } from 'react';
import React from 'react';

interface NavProviderProps {
  children?: React.ReactNode;
}

const NavContext = createContext({
  isSideNavOpen: false,
  toggleSideNav: () => {}
});

export const NavProvider = ({ children }: NavProviderProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(prevState => !prevState);
  };

  return (
    <NavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;