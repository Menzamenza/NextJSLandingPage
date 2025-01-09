const Footer = () => {
    return (
        <footer className="mt-24 m-8">
            <div className="flex  flex-col md:flex-row  items-center justify-between bg-[#8D448B] rounded py-[30px] px-[70px]">
                <div className=" text-white text-[30px] font-bold leading-snug">
                    <p>Hire the world's best developers <br /> and designer around!</p>
                </div>
                <div>
                    <img src="/img/download.svg"
                        className="hidden w-4/5 md:flex" alt="" />
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div>
                        <img src="/img/hirehaut.svg" alt="" />
                    </div>
                    <div>
                        <button className="rounded font-normal text-[#8D448B] text-[15px] hover:text-white bg-white py-2.5 px-6 hover:bg-[#0F2137] ">
                            HIRE DEVELOPERS
                        </button>
                    </div>
                    <div>
                        <img src="/img/hirebas.svg" className="rotate-180" alt="" />
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between my-12">
                <div>
                    <img src="/img/logo.svg" alt="" />
                </div>
                <div className="text-slate-400">
                    <p>© 2025 All right reserved - Design & Developed by RedQ, Inc</p>
                </div>
                <div className="flex  hidden md:flex list-none gap-9">
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Advertises
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Supports
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Marketing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            FAQ
                        </a>
                    </li>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
