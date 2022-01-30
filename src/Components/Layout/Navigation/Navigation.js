import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { localeState } from "../../../context/appState";
import logo from '../../../imgs/LogoTop10.jpg';
import LocaleSelection from "../../Utils/LocaleSelection/LocaleSelection";
import locales from "../../../locales/locales";
export default function Navigation(){
    const currentLocale = useRecoilValue(localeState)
    const [labels, setLabels] = useState(locales[currentLocale]?.navigationLabels)

    useEffect(() => {
        setLabels(locales[currentLocale]?.navigationLabels)
    }, [currentLocale])


return  <section className="w-full px-8 text-gray-700 bg-white border-b-2 shadow-md">
        <div className="container w-full flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row w-full">
                <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                        <img src={logo} alt="Top10easy"/>
                    </span>
                </Link>
                <nav className="flex flex-wrap w-full self-center justify-center lg:justify-end mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                    <Link to="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">{labels?.home}</Link>
                    <Link to="/about" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">{labels?.contactUs}</Link>
                    <Link to="/contact" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">{labels?.aboutUs}</Link>
                </nav>
                <div className="inline-flex items-center w-80 self-center space-x-6 justify-center lg:justify-end">
                    <LocaleSelection />
                </div>
              
            </div>

            
        </div>
    </section>
}