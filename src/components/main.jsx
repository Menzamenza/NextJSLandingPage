import Image from "next/image";
import VideoModal from "./Video";
import Testimony from "./Testimony";
import News from "./News";

const Main = () => {
    return (
        <main className="mt-24  h-full ">
            {/* *************************premiere partie *****************************/}
            <div className="p-8 grid md:grid-cols-2 sm:grid-cols-1 gap-9" >
                <div>
                    <p className="text-4xl md:text-6xl  font-bold text-[#0F2137] md:leading-snug mb-3">Great software is built with amazing developers</p>
                    <p className="text-[18px] text-[#0F2137] leading-9 mb-3">We help build and manage a team of world-class <br /> developers to bring your vision to life</p>
                    <div>

                    </div>
                    <div className="flex flex-wrap gap-3 ">
                        <input type="text" className=" px-5 py-3 rounded" placeholder="subscribe newsletter" />
                        <button className="bg-[#793677] font-semibold  px-5 py-3 rounded text-[#F6F8FB] text-700 ">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <div><p className="text-slate-300">Sponsored by :</p></div>
                        <div>
                            <img src="/img/paypal.png" alt="" />
                        </div>
                        <div>
                            <img src="/img/google.png" alt="" />
                        </div>
                        <div>
                            <img src="/img/dropbox.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/img/banner.png"
                        width={600} height={600} className="aspect-square object-contain"
                    />
                </div>
            </div>

            {/* *************************deuxieme partie *****************************/}
            <div className="bg-white p-8" id="services">
                <p className="text-center text-[#793677] text-[15px]">Quality Features</p>
                <p className="text-[30px] text-center font-bold ">Meet exciting feature of app</p>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6 mt-14">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-24 h-24 bg-amber-200 rounded-3xl flex items-center justify-center">
                            <img src="/img/petit1.svg" alt="" />
                        </div>
                        <p className="font-bold text-[18px]">Unlimited Customization</p>
                        <p className=" text-center leading-9">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-24 h-24 bg-teal-300 rounded-3xl flex items-center justify-center">
                            <img src="/img/petit2.svg" alt="" />
                        </div>
                        <p className="font-bold text-[18px]">Vector shape & resizable</p>
                        <p className=" text-center leading-9">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-24 h-24 bg-sky-400 rounded-3xl flex items-center justify-center">
                            <img src="/img/petit3.svg" alt="" />
                        </div>
                        <p className="font-bold text-[18px]">Editing freedom</p>
                        <p className=" text-center leading-9">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center">
                            <img src="/img/petit4.svg" alt="" />
                        </div>
                        <p className="font-bold text-[18px]">Best Award history</p>
                        <p className=" text-center leading-9">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 my-36 ">
                    <div className="">
                        <img src="/img/boost-1.png" alt="" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold leading-snug tracking-wide my-8">Boost your agencies by choosing Ninja Developers</p>
                        <p className="text-[18px] leading-9 text-slate-500 my-4">Create custom landing pages with Shades that convert more visitors than any website, no coding required.</p>
                        <div className="my-8 flex flex-col gap-4 tracking-wide">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="white">
                                        {/* Fond gris clair */}
                                        <circle cx="12" cy="12" r="12" fill="#E5E7EB" />
                                        {/* Cercle intérieur */}
                                        <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
                                        {/* Coche */}
                                        <path
                                            fill="white"
                                            d="M9.75 12.97l-1.75-1.75a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg"> Unlimited design possibility</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="white">
                                        {/* Fond gris clair */}
                                        <circle cx="12" cy="12" r="12" fill="#E5E7EB" />
                                        {/* Cercle intérieur */}
                                        <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
                                        {/* Coche */}
                                        <path
                                            fill="white"
                                            d="M9.75 12.97l-1.75-1.75a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg"> Completely responsive features</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="white">
                                        {/* Fond gris clair */}
                                        <circle cx="12" cy="12" r="12" fill="#E5E7EB" />
                                        {/* Cercle intérieur */}
                                        <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
                                        {/* Coche */}
                                        <path
                                            fill="white"
                                            d="M9.75 12.97l-1.75-1.75a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg"> Easy to customize plugins</p>
                                </div>
                            </div>
                            <div className="mt-3 font-semibold text-[#793677] flex">
                                <p>Learn more</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#793677"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoModal />
            </div>

            {/* ************************************* Troisieme partie**********************************/}
            <Testimony/>

            
            {/* ************************************* Quatrieme partie ***********************************/}
            <News/>
        </main>
    );
};

export default Main;
