
import React from "react";
import Slider from "react-slick";

const News = () => {
    // Composants personnalisés pour les flèches
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute bottom-0 right-[calc(50%-30px)] z-10 cursor-pointer"
            onClick={onClick}>
            <i className="fa fa-right-long text-2xl text-mauve "></i>
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute bottom-0 left-[calc(50%-30px)] z-10 cursor-pointer"
            onClick={onClick}>
            <i className="fa fa-left-long text-2xl text-mauve"></i>
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Taille maximale pour tablette et mobile
                settings: {
                    slidesToShow: 2,
                    nextArrow: <NextArrow />, // Flèche suivante personnalisée
                    prevArrow: <PrevArrow />,// Carrousel : 1 slide visible
                },
            },
            {
                breakpoint: 768, // Taille maximale pour mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />, // Flèche suivante personnalisée
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 1440,
                settings: "unslick", // Désactive la fonctionnalité de slider
            },
        ],
    };

    const tutorials = [
        {
            image: "/img/tuto1.png",
            title: "How to work with prototype design with adobe xd featuring tools",
            comments: "22 Comments",
        },
        {
            image: "/img/tuto2.png",
            title: "Create multiple artboard by using figma prototype development",
            comments: "15 Comments",
        },
        {
            image: "/img/tuto3.png",
            title: "Convert your web layout theming easily with sketch zeplin",
            comments: "12 Comments",
        },
    ];

    return (
        <div className="p-8" id="news">
            {/* Titre de la section */}
            <div className="text-center mt-14">
                <p className="text-[#793677] text-[15px]">Quality Features</p>
                <p className="text-[30px] font-bold">Tutorials that people love most</p>
            </div>

            {/* Slider */}
            <Slider {...settings} className="mt-14 relative grid md:grid-cols-3 sm:grid-cols-1">
                {tutorials.map((tutorial, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white rounded">
                            <div className="relative h-56 rounded">
                                <img
                                    src={tutorial.image}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="mt-4 p-6">
                                <h3 className="text-[#212121] hover:text-[#793677] font-bold text-[18px]">
                                    {tutorial.title}
                                </h3>
                                <div className="flex gap-1 items-center mt-3">
                                    <i className="fa fa-comment-dots text-slate-400"></i>
                                    <p className="text-slate-400 text-[14px]">{tutorial.comments}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default News;

