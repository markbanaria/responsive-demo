'use client';

import Image from "next/image";
import TopNav from "../components/TopNav/TopNav";
import ResponsiveSection from "../components/ResponsiveSection/ResponsiveSection";
import Tile from "../components/Tile/Tile";
import SideNav from "../components/SideNav/SideNav";
import FormContainer from "@/components/Forms/FormContainer";

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-100 flex flex-row">
        <SideNav></SideNav>
        <div className="grow">
          <TopNav>
            Landing
          </TopNav>
          <ResponsiveSection>
            <FormContainer>
                <div className="font-bold text-2xl">Welcome!</div> 
                <div className="text-xl font-bold text-neutral-900 mt-8">To get started:</div>
                <div className="text-xl text-neutral-500 mt-2">1. Pick a layout form the menu</div>
                <div className="text-xl text-neutral-500 mt-2">2. Resize your screen</div>
            </FormContainer>
          </ResponsiveSection>
        </div>
      </main>
    </>
  );
}
