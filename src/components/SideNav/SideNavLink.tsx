import React from 'react';
import Link from 'next/link';

interface SideNavLinkProps {
  children?: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}

export default function SideNavLink({ children, name, link, className }: SideNavLinkProps) {
  return (
    <Link href={link} className={`block w-full p-4 hover:bg-neutral-100 rounded-md ${className}`}>
      {name}
      {children && <div className="mt-2">{children}</div>}
    </Link>
  );
}