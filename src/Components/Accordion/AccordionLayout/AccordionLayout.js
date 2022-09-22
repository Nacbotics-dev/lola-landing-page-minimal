import React from 'react';

function AccordionLayout({title,children,index,activeIndex,setActiveIndex}) {
    let borderLine
    const handleSetIndex = (index)=>(activeIndex !== index) && setActiveIndex(index)

    if (index === 1) {
        borderLine = ''
    } else {
        borderLine = 'border-[#D0D5DD] border-t'
    }

    return (
        <div className={`${index === activeIndex ? "h-[100px] mb-8":"h-[88px] flex items-center"} ${borderLine}`}>
            <div onClick={()=> handleSetIndex(index)} className='w-full flex justify-between p-2 mt-2'>
                <div className='flex'>
                    <div className='font-inter font-bold text-lg  leading-6 text-black md:text-2xl md:font-avenir'>{title}</div>
                </div>

                <div className='flex items-center justify-center'>
                {
                (activeIndex === index) 
                ? 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                : 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                }
                </div>
                
            </div>
            {(activeIndex === index) &&(

                <div className='font-inter text-base font-normal text-[#737373] p-2 mb-8 max-w-[603px] text-left md:text-lg md:font-avenir md:leading-[18px] '>
                    {children}
                </div>
            )}
            
        </div>
    );
}

export default AccordionLayout;