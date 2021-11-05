import EzInstallPrompt from "../../Layout/EzInstallPrompt/EzInstallPrompt";
import Dropdown from "../../Utils/Dropdown/Dropdown";
import HeadlessUiDropdown from "../../Utils/HeadlessUiDropdown/HeadlessUiDropdown";
import Search from "../../Utils/Search/Search";

export default function Home(){
    return  <section className="w-full px-2 antialiased bg-white">
        <EzInstallPrompt />
        <div className="mx-auto max-w-7xl">
            <div className="container max-w-lg py-0 sm:py-32 mx-auto text-left md:max-w-none md:text-center">
                <h1 className="text-3xl md:text-5xl p-2 md:p-8 font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">What Service</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-400 md:inline-block pb-4">Are you looking for</span></h1>
                <div className="flex flex-col items-center mt-4 sm:mt-12 text-center">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <HeadlessUiDropdown />
                        {/* <Dropdown></Dropdown> */}
                        <Search></Search>
                    </div>
                </div>
            </div>
        </div>
    </section>
}