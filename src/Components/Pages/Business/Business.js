import Carousel from "../../Utils/Carousel/Carousel";

export default function Business(){
    const weekHours = [
        {day: 'Monday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Tuesday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Wednesday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Thursday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Friday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Saturday', hours: '9:00 AM - 10:00 PM'},
        {day: 'Sunday', hours: '9:00 AM - 10:00 PM'}
    ]
    return <section class="bg-white">
        <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
            
            <div class="flex flex-col items-center sm:px-5 md:flex-row">
                <div class="w-full md:w-1/2">
                    <a href="#_" class="block">
                        <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg" alt="Savory Cupcakes" />
                    </a>
                </div>
                <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                    <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                      
                        <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Cupcakes.</a></h1>
                        
                        <div className="flex items-center ">
                <div className="px-2">
                    <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded text-black">
                        <span className="text-black">+1 123 567 8787</span>
                    </button>
                </div>
                <div className="px-2">
                    <button className="flex bg-green-400 hover:bg-green-500 font-bold py-2 px-4 rounded text-white items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="text-white">Message</span>
                    </button>
                </div>
                <div className="px-2">
                    <button className="flex bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded text-black items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white">Show on map</span>
                    </button>
                </div>
            </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row lg:px-16">

                    <div class="box-border w-full text-black border-solid md:pl-10 md:order-none">
                        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Description
                        </h2>
                        <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget leo auctor ex interdum euismod. Nunc ornare dictum ex, in scelerisque risus consectetur nec. Curabitur volutpat nisl cursus porta ultricies. Maecenas faucibus pellentesque neque, eleifend tempus augue malesuada ut. In rutrum, justo non aliquam consequat, quam ex interdum turpis, et congue tellus nunc in purus. Donec nisi tellus, mattis quis auctor nec, ornare eget ex. In efficitur vitae lorem nec vestibulum.
                        </p>
                    </div>

                </div>
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row lg:px-16">

                    <div class="box-border w-full text-black border-solid md:pl-10 md:order-none">
                        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Categories
                        </h2>
                        <div class="flex flex-row py-4">
                            <div class="px-4">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Food
                                </button>
                            </div>
                            <div class="px-4">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Restaurant
                                </button>
                            </div>
                            <div class="px-4">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Cake
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row lg:px-16">
                    <div class="box-border w-full text-black border-solid md:pl-10 md:order-none">
                        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Hours
                        </h2>
                        <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                            { weekHours.map( day=>{
                                return <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid cursor-pointer hover:text-green-400">
                                <span class="inline-flex items-center justify-center w-6 h-6 mr-2"><span class="text-sm font-bold">{day.day}</span></span> <span className="ml-24">{day.hours}</span>
                            </li>
                            })}
                        
                        </ul>
                        </p>
                    </div>
                </div>
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row lg:px-16">
                    <div class="box-border w-full text-black border-solid md:pl-10 md:order-none">
                        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Location
                        </h2>
                        <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                       Map here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
}