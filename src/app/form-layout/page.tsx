import Image from "next/image";
import TopNav from "../../components/TopNav/TopNav";
import ResponsiveSection from "../../components/ResponsiveSection/ResponsiveSection";
import Tile from "../../components/Tile/Tile";
import SideNav from "../../components/SideNav/SideNav";
import FormContainer from "@/components/Forms/FormContainer";

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-neutral-100 flex flex-row">
      <SideNav></SideNav>
      <div className="grow">
        <TopNav>
          Form
        </TopNav>
        <ResponsiveSection>
          <FormContainer>
            <div className="font-bold">Form Container</div>
            <div className="text-neutral-500 mb-8">Centered and fixed width on large screen. Full width on smaller screens.</div>
            <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="John Smith" />
            </div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-4">Email</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="text" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="js@email.com" />
            </div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 mt-4">Phone</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="text" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="js@email.com" />
            </div>
            <label htmlFor="address1" className="block text-sm font-medium leading-6 text-gray-900 mt-4">Address</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="text" name="address1" id="address1" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="js@email.com" />
            </div>
            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900 mt-4">Company</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="text" name="company" id="company" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="js@email.com" />
            </div>
            <div className="mt-8 shadow-md bg-purple-700 text-white text-center font-bold rounded-lg pt-2 pb-2">
              Submit
            </div>
          </div>
          </FormContainer>
        </ResponsiveSection>
      </div>
    </main>
    </>
  );
}
