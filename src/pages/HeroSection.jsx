import React from 'react'
import Slider from './Slider'

const HeroSection = () => {
    return (
        <div className=' max-w-full xl:px-24 lg:px-16 md:px-10 px-6 font-inter md:mt-32 mt-24'>
            <div className='flex flex-wrap items-center gap-2 md:text-lg text-base text-gray font-medium my-6'>
                <button>
                    <img src="/images/Home.svg" alt="Image Not Available" />
                </button>
                <div>
                    <img src="/images/RightArrow.svg" alt="Image Not Available" />
                </div>
                <button>Flashcard</button>
                <div>
                    <img src="/images/RightArrow.svg" alt="Image Not Available" />
                </div>
                <button>Mathematics</button>
                <div>
                    <img src="/images/RightArrow.svg" alt="Image Not Available" />
                </div>
                <div className='font-semibold text-darkBlue'>Relation and Function</div>
            </div>

            <div className='font-bold md:text-3xl text-2xl md:leading-normal leading-[26px] bg-gradient-to-b from-darkBlue to-blue bg-clip-text text-transparent md:py-0 py-2'>
                Relations and Functions (Mathematics)
            </div>

            <div className='flex justify-center'>
                <Slider />
            </div>

            <div className='flex flex-wrap justify-between items-center mt-8 gap-4'>
                <div className='flex gap-5 items-center'>
                    <div className=' bg-yelow-400 w-fit rounded-full md:p-4 p-3 shadow-[0_0px_40px_rgba(6,_40,_110,_0.4)]'>
                        <img src="/images/Logo.svg" alt="Not Available" className='md:w-12 w-10 md:h-12 h-10' />
                    </div>
                    <div>
                        <div className='font-inter text-gray font-bold text-xs md:mb-2 mb-1'>Published by</div>
                        <img src="/images/LogoName.svg" alt="Not Available" />
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src="/images/Plus.svg" alt="Not Available" className='bg-gradient-to-b from-darkBlue to-blue md:p-4 p-3 rounded-full cursor-pointer' />
                    <div className=' font-inter font-semibold md:text-3xl text-2xl bg-gradient-to-b from-darkBlue to-blue bg-clip-text text-transparent'>Create Flashcard</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection