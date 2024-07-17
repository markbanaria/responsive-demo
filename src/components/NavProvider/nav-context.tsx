'use client';

import { createContext, useState } from 'react';
import React from 'react';


interface NavProviderProps {
  children?: React.ReactNode;
}

const NavContext = createContext({
  isSideNavOpen: false,
  toggleSideNav: () => {},
  hideSideNav: () => {}
});

export const NavProvider = ({ children }: NavProviderProps ) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(prevState => !prevState);
  };

  const hideSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <NavContext.Provider value={{ isSideNavOpen, toggleSideNav, hideSideNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
