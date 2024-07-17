import React from 'react';

interface TileProps {
  children?: React.ReactNode;
  className?: string;
}

const Tile: React.FC<TileProps> = ({ children, className }) => {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 rounded-lg p-4 ${className} bg-white border border-neutral-200`}>
      {children}
    </div>
  );
};

export default Tile;
