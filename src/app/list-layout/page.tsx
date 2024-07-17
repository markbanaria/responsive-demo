import Image from "next/image";
import TopNav from "../../components/TopNav/TopNav";
import ResponsiveSection from "../../components/ResponsiveSection/ResponsiveSection";
import Tile from "../../components/Tile/Tile";
import SideNav from "../../components/SideNav/SideNav";

const items = [
  {
    name: "Item 1",
    price: "12.00"
  },
  {
    name: "Item 2",
    price: "22.00"
  },
  {
    name: "Item 3",
    price: "34.00"
  },
  {
    name: "Item 4",
    price: "98.00"
  },
  {
    name: "Item 5",
    price: "82.00"
  },
  {
    name: "Item 6",
    price: "342.00"
  }
];


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-neutral-100 flex flex-row">
      <SideNav></SideNav>
      <div className="grow">
        <TopNav>
          List
        </TopNav>
        <ResponsiveSection>
          <div className="mt-8">A layout with a list (the price moves down when on mobile)</div>
          <ul className="mt-10">
            {items.map((item, index) => (
              <li key={index} className="border bg-white rounded-lg p-4 mb-4 md:flex md:flex-row">
                <div className="grow">{item["name"]}</div>
                <div className="text-neutral-500 md:mt-2">{item["price"]}</div>
              </li>
            ))}
          </ul>
        </ResponsiveSection>
      </div>
    </main>
    </>
  );
}
