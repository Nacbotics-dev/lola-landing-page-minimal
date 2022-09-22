import React from 'react';
import Accordion from '../Accordion/Accordion';

function FaqAccordion(props) {

    return (
        <div className='bg-[#F9FAFB] pb-[104px] pt-[88px] w-full'>
            <div className='text-center  max-w-[337px] mx-auto w-full md:max-w-[759px]'>
                <div>
                    <h2 className='font-inter text-[33px] text-black font-medium md:font-extrabold md:text-[38px]  md:font-gilroy'>Frequently Ask Questions</h2>
                </div>
                <p className='font-inter text-lg font-normal text-[#667085] md:text-2xl md:font-avenir'>We provide answers to some questions that were <br/> frequently asked. Feel free to go through the answers provided.</p>
            </div>

            <Accordion/>

            <div className='max-w-[337px] mx-auto w-full md:max-w-[759px]'> 
                <p className='font-inter text-base text-center font-normal leading-6 text-[#737373] md:font-avenir md:text-lg'>Haven’t got your answer? <a href="#support" className='text-[#009FF5]'>Contact our support now</a></p>
            </div>

        
        </div>
    );
}

export default FaqAccordion;