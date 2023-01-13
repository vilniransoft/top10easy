import EzInstallPrompt from "../../Layout/EzInstallPrompt/EzInstallPrompt";
import HeadlessUiDropdown from "../../Utils/HeadlessUiDropdown/HeadlessUiDropdown";
import locales from "../../../locales/locales";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { localeState } from "../../../context/appState";
import AlgoliaBusinessSectors from "../../Algolia/AlgoliaBusinessSectors/AlgoliaBusinessSectors";

export default function Home(){
    const currentLocale = useRecoilValue(localeState)
    const [homeText, setHomeText] = useState(locales[currentLocale]?.home)

    useEffect(() => {
        setHomeText(locales[currentLocale]?.home)
    }, [currentLocale])

    return  <section className="w-full px-2 antialiased bg-white">
        <EzInstallPrompt />
        <div className="mx-auto max-w-7xl">
            <div className="container max-w-lg py-0 mx-auto text-left md:max-w-none md:text-center">
                <h1 className="text-3xl md:text-5xl p-2 md:p-8 font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl p-6"><span className="inline md:block">{homeText?.h1Top}</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-400 md:inline-block pb-4">{homeText?.h1Bottom}</span></h1>
                <div className="flex flex-col items-center mt-4 sm:mt-12 text-center">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <HeadlessUiDropdown />
                        <AlgoliaBusinessSectors />
                    </div>
                </div>
            </div>
        </div>
    </section>
}