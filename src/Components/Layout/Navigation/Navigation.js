import { Link } from "react-router-dom";
import logo from '../../../imgs/LogoTop10.jpg';
export default function Navigation(){

return  <section className="w-full px-8 text-gray-700 bg-white border-b-2 shadow-md">
        <div className="container w-full flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row w-full">
                <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                        <img src={logo} alt="Top10easy"/>
                    </span>
                </Link>
                <nav className="flex flex-wrap w-full self-center justify-center lg:justify-end mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                    <Link to="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</Link>
                    <Link to="/about" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">About Us</Link>
                    <Link to="/contact" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Contact Us</Link>
                </nav>
                <div className="inline-flex items-center w-80 self-center space-x-6 justify-center lg:justify-end">
                    <Link to="/contact" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent flex-nowrap rounded-lg">
                        Submit your business
                    </Link>
                </div>
            </div>

            
        </div>
    </section>
}