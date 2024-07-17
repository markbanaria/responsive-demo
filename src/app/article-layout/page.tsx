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
          Article
        </TopNav>
        <ResponsiveSection>
          <div className="mt-16"></div>
          <div className="2xl:flex 2xl:flex-row">
            <div className="2xl:grow font-bold text-3xl">For a software-defined world</div>
            <div className="flex flex-row 2xl:mt-0 mt-6">
              <div className="bg-purple-700 text-sm text-white pt-2 pb-2 pl-4 pr-4 mr-2 rounded-lg text-center">Request a Demo</div>
              <div className="bg-neutral-300 text-sm pt-2 pb-2 pl-4 pr-4 rounded-lg text-center">Learn More</div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-16">
            <div className="2xl:col-span-4 2xl:order-first order-last col-span-12">
              Our client is one of the cloud-native pioneers in the telecom and network software space. The company is the leading supplier of mobile, fixed and unified communications solutions for service providers, equipment manufacturers and large enterprises. As part of a wider 5G / IoT implementation, our client partnered with one of the largest service providers in Europe to trial Wireless Wireline Convergence (WWC) architecture. The aim of the WWC project was to create and test a common-core infrastructure, supporting both fixed and wireless broadband access from a single technology stack. 
              <br></br>
              <br></br>
              The client engaged Luxoft to develop the 5G Access Gateway Function (AGF) solution component that provides subscriber authentication, authorization and accounting (AAA) services, plus hierarchical traffic shaping and policing for fixed network and 5G residential gateways. This enabled the use of common credentials, authentication and a unified approach to applying network policy.
            </div>
            <div className="2xl:col-span-1 col-span-0"></div>
            <div className="2xl:col-span-7 col-span-12">
              <div className="w-full 2xl:h-[532px] 2xl:mt-0 2xl:mb-0 mb-12 mt-8 h-[240px] col-span-12 bg-purple-100"></div>
            </div>
          </div>
        </ResponsiveSection>
      </div>
    </main>
    </>
  );
}
