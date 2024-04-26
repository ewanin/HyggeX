import React, { useState, useEffect, useRef } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className=' [width:-webkit-fill-available] xl:px-24 lg:px-16 md:px-10 px-6 md:py-8 py-6 bg-white top-0 fixed z-10'>
            <div className='md:flex hidden justify-between items-center'>
                <a href=""><img src="/images/MainLogo.svg" alt="Image Not Available" /></a>
                <div className='flex items-center xl:gap-10 lg:gap-8 md:gap-4 font-inter'>
                    <div className=' flex text-lg font-normal text-navText xl:gap-10 lg:gap-8 md:gap-4'>
                        <a href="">Home</a>
                        <a href="">Flashcard</a>
                        <a href="">Contact</a>
                        <a href="">FAQ</a>
                    </div>
                    <a href="" className='bg-gradient-to-b from-darkBlue to-blue text-lg font-medium text-white px-[40px] py-[8px] rounded-full'> Login</a>
                </div>
            </div>
            <div ref={navRef} className='md:hidden'>
                <div className="flex justify-between items-center">
                    <a href=""><img src="/images/MainLogo.svg" alt="Image Not Available" /></a>
                    <div>
                        <button aria-label onClick={toggleMenu} className=" text-darkBlue focus:outline-none focus:text-darkBlue">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-center">
                        <div className="flex flex-col mt-4 text-lg font-normal text-navText gap-4">
                            <a href="">Home</a>
                            <a href="">Flashcard</a>
                            <a href="">Contact</a>
                            <a href="">FAQ</a>
                            <a href="" className=' w-fit mx-auto bg-gradient-to-b from-darkBlue to-blue text-lg font-medium text-white px-[40px] py-[8px] rounded-full'>Login</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header