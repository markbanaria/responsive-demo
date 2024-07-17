import Image from "next/image";
import TopNav from "../../components/TopNav/TopNav";
import ResponsiveSection from "../../components/ResponsiveSection/ResponsiveSection";
import Tile from "../../components/Tile/Tile";
import SideNav from "../../components/SideNav/SideNav";

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-neutral-100 flex flex-row">
      <SideNav></SideNav>
      <div className="grow">
        <TopNav>
          Tiles
        </TopNav>
        <ResponsiveSection>
          <div className="mt-8">A layout with a dynamic grid of tiles</div>
          <div className="grid grid-cols-12 gap-4 pt-8">
            {items.map((item, index) => (
              <Tile key={index} className="h-40">
              </Tile>
            ))}
          </div>
        </ResponsiveSection>
      </div>
    </main>
    </>
  );
}
