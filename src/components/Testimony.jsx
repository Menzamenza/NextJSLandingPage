import React from "react";
import Slider from "react-slick";
import { useState, useRef } from "react";

const Testimony = () => {
    const [activeIndex, setActiveIndex] = useState(0); // État pour suivre l'index actif
    const sliderRef = useRef(null); // Référence au slider

    const testimonies = [
        {
            quote:
                "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again",
            name: "Pierre Hackett",
            role: "VP of Engineering",
            image: "/img/testi1.png",
        },
        {
            quote:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.",
            name: "Natalia Sanz",
            role: "Head of Technology",
            image: "/img/testi2.png",
        },
        {
            quote:
                "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal",
            name: "Ece Akman",
            role: "Senior Marketer",
            image: "/img/testi3.png",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        afterChange: (current) => setActiveIndex(current), // Mettre à jour l'état avec l'index actif
    };

    // Fonction pour changer manuellement le slide actif
    const handleTestimonyClick = (index) => {
        setActiveIndex(index); // Mettre à jour l'index actif
        sliderRef.current.slickGoTo(index); // Changer le slide actif
    };

    return (
        <div className="text-center py-12 px-4 bg-white" id="testimonials">
            {/* Section Title */}
            <p className="text-center text-[#793677] text-[15px] tracking-wide ">Customers comments</p>
            <p className="text-[30px] text-center font-bold ">Why customers love us</p>

            {/* Slider */}
            <Slider {...settings} ref={sliderRef} className="my-8">
                {testimonies.map((testimony, index) => (
                    <div key={index}>
                        <p
                            className="text-3xl text-[#0F2137] leading-snug tracking-wide max-w-2xl mx-auto"
                            style={{ fontFamily: "Playfair Display, serif" }}>
                            {testimony.quote}
                        </p>
                    </div>
                ))}
            </Slider>

            {/* List */}
            <div className="flex items-center justify-center gap-8 mt-6">
                {testimonies.map((testimony, index) => (
                    <div>
                        {/* Barre Purple */}
                        <div
                            className={`mb-2 w-24 mx-auto ${activeIndex === index ? " border border-2 border-mauve" : "bg-transparent"}`}>
                        </div>
                        <div key={index}
                            className="flex items-center justify-center gap-1 cursor-pointer"
                            onClick={() => handleTestimonyClick(index)}>
                            <img
                                src={testimony.image}
                                alt={testimony.name}

                            />
                            <div className="text-center hidden md:block">
                                <h4 className="text-lg font-bold mt-2">{testimony.name}</h4>
                                <p className="text-sm text-gray-500">{testimony.role}</p>

                            </div>

                        </div>
                    </div>

                ))}
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:mt-36 sm:mt-8 p-8">
                <div className="text-start md:pt-36 sm:pt-8">
                    <p className="text-[32px] font-bold leading-snug  my-8">Free Customer Support to ensure what you like to expect</p>
                    <p className=" leading-loose  my-4">We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers</p>
                    <p className=" leading-loose text-slate-500 my-4">If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.</p>
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
                <div>
                    <img
                        className="object-cover w-full h-full "
                        src="/img/lui.png"
                        alt="Customer Support"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimony;
