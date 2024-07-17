import ResponsiveSection from "../ResponsiveSection/ResponsiveSection";
import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <>
      <div className="mt-10 grid grid-cols-12">
        <div className="col-span-0 2xl:col-span-3"></div>
        <div className="2xl:col-span-6 col-span-12 border bg-white p-8 rounded-lg">
          {children}
        </div>  
      </div>
    </>
  );
}
