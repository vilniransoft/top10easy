import { Link } from "react-router-dom";
import Dropdown from "../../Utils/Dropdown/Dropdown";
import Search from "../../Utils/Search/Search";

export default function EzSearchHeader(){
    return <section className="w-full text-gray-700 bg-gray-100">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end cursor-pointer">
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </Link>
    </div>
    <div className="relative flex flex-col md:flex-row align-center items-center">
        <Dropdown />
        <div className="flex">
            <Search />
        </div>
    </div>

    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end cursor-pointer">
        <div className="hover:bg-gray-200 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        </div>
        <div className="hover:bg-gray-200 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        </div>
    </div>
    </div>
    </section>
}