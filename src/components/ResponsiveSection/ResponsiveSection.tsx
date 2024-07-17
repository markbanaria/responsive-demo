import React, { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveSection({ children, className }: ResponsiveSectionProps) {
  return (
    <div className={`container mx-auto pl-6 pr-6 ${className}`}>
      {children}
    </div>
  );
}
