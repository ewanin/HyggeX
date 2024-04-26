import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 10;

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const slides = Array.from({ length: totalSlides }).map((_, index) => (
        <div key={index} className="w-full flex-shrink-0 h-full rounded-[32px] bg-gradient-to-bl from-[#051A91] from-0% via-[#2284F1] via-80% to-[#1F80EB] to-100%">
            <div className="flex justify-between md:p-8 p-6 h-[10%]">
                <div>
                    <img src="/images/Bulb.svg" alt="Not Available" className="cursor-pointer" />
                </div>
                <div>
                    <img src="/images/Sound.svg" alt="Not Available" className="cursor-pointer" />
                </div>
            </div>
            <div className='flex justify-center items-center h-[70%] font-inter font-bold md:text-4xl text-2xl text-white'>
                <div>9 + 6 + 7x - 2x - 3</div>
            </div>
        </div>
    ));

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide < totalSlides ? prevSlide + 1 : 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide > 1 ? prevSlide - 1 : totalSlides
        );
    };

    const resetSlides = () => {
        setCurrentSlide(1);
    };

    return (
        <div>
            <div className='md:w-[712px] w-[90vw] flex flex-wrap justify-between md:py-6 py-4 md:px-6 px-0 font-inter font-medium'>
                <button className={`md:w-20 text-center py-1 font-semibold ${activeButton === 0 ? 'text-darkBlue border-b-2' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >Study</button>
                <button className={`md:w-20 text-center py-1 font-semibold ${activeButton === 1 ? 'text-darkBlue border-b-2' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >Quiz</button>
                <button className={`md:w-20 text-center py-1 font-semibold ${activeButton === 2 ? 'text-darkBlue border-b-2' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >Test</button>
                <button className={`md:w-20 text-center py-1 font-semibold ${activeButton === 3 ? 'text-darkBlue border-b-2' : ''}`}
                    onClick={() => handleButtonClick(3)}
                >Game</button>
                <button className={`md:w-20 text-center py-1 font-semibold ${activeButton === 4 ? 'text-darkBlue border-b-2' : ''}`}
                    onClick={() => handleButtonClick(4)}
                >Others</button>
            </div>
            <div className="overflow-hidden md:w-[712px] w-[90vw] md:h-[394px] h-[250px] rounded-[32px]">
                <div className="flex transition-transform duration-300 ease-in-out rounded-[32px] h-full" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
                    {slides}
                </div>
            </div>
            <div className=' md:w-[712px] w-[90vw] flex justify-between items-center md:py-8 py-4 md:px-6 px-2 '>
                <button>
                    <img src="/images/Reload.svg" alt="Not Available" onClick={resetSlides} />
                </button>
                <div className='flex items-center md:gap-10 gap-4'>
                    <img src="/images/Back.svg" alt="Not Available" className='bg-gradient-to-b from-darkBlue to-blue md:p-4 p-3 rounded-full cursor-pointer' onClick={goToPrevSlide} />
                    <div className='font-inter md:text-2xl text-xl font-bold text-cyanBlue'>
                        {`${currentSlide.toString().padStart(2, "0")}/${totalSlides}`}
                    </div>
                    <img src="/images/Next.svg" alt="Not Available" className='bg-gradient-to-b from-darkBlue to-blue md:p-4 p-3 rounded-full cursor-pointer' onClick={goToNextSlide} />
                </div>
                <button>
                    <img src="/images/FullScreen.svg" alt="Not Available" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
