import { useState } from "react";

const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-center">
            {/* Texte principal */}
            <p className="text-[32px] tracking-wide leading-snug text-center font-bold">
                Leading companies trust us <br /> to develop software
            </p>
            <p className="tracking-wide leading-snug text-lg text-slate-500 my-6">
                We believe it’s important for everyone to have access to software <br />
                especially when it comes to digital learning be navigate.
            </p>

            {/* Bouton Explore Details */}
            <div className="mt-3 font-semibold text-[#793677] flex items-center justify-center">
                <p>Explore Details</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#793677"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </div>

            {/* Image de couverture avec icône Play */}
            <div
                className="relative w-4/5 mx-auto mt-6 cursor-pointer"
                onClick={toggleModal}
            >
                {/* Image de couverture */}
                <img
                    src="/img/video.png"
                    alt="Video Cover"
                    className="w-full h-full object-cover rounded-lg"
                />
                {/* Icône Play */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-[#793677] bg-white rounded-full p-8 shadow-lg"
                        viewBox="0 0 24 24"
                        fill="#793677"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className=" rounded-lg relative max-w-3xl w-full">
                        {/* Bouton Close */}
                        <button
                            className="absolute top-[-20px] right-0 text-white"
                            onClick={toggleModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {/* Vidéo */}
                        <div className="w-full aspect-w-24 aspect-h-14">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/Cm3U-NgJb9I?autoplay=1&rel=0&controls=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoModal;
