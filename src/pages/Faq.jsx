import React, { useState } from 'react';
import DownArrow from '/images/DownArrow.svg';
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    { question: 'Can education flashcards be used for all age groups?', answer: 'Yes, education flashcards can be used for all age groups as they are customizable to fit different learning needs.' },
    { question: 'How do education flashcards work?', answer: 'Education flashcards work by presenting a question or concept on one side and its answer or explanation on the other. They are an effective tool for learning and memorization.' },
    { question: 'Can education flashcards be used for test preparation?', answer: 'Absolutely! Education flashcards are commonly used for test preparation as they help in memorizing important information and concepts.' }
  ];

  const toggleFaqItem = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className='max-w-full xl:px-24 lg:px-16 md:px-10 px-6 font-inter md:my-28 my-20'>
      <div>
        <div className=' text-3xl font-bold bg-gradient-to-b from-darkBlue to-blue bg-clip-text text-transparent'>FAQ</div>
        <div className='flex flex-col gap-4 md:mt-10 mt-6'>
          {faqItems.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 lg:w-[858px] md:w-[600px] w-full border-2 md:p-4 p-3 border-blue rounded-2xl cursor-pointer'
              onClick={() => toggleFaqItem(index)}
            >
              <div className='flex items-center justify-between'>
                <div className='text-base font-semibold text-blackNew'>{item.question}</div>
                <img src={DownArrow} alt="Not Available" className={`transform transition-transform ${index === openIndex ? 'rotate-180' : ''}`} />
              </div>
              {index === openIndex && (
                <div className='text-base text-gray-600'>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
