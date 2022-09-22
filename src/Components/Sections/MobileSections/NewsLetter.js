import React from 'react';

function NewsLetter(props) {
    return (
        <div className='block bg-[#1B8AED] px-[15px] pt-[26px] pb-14 text-center md:hidden'>

            <div className='max-w-[348px] w-full mx-auto'>
                <div className='mb-[27px]'>
                    <div className='max-w-[319px] w-full mx-auto'>
                        <h4 className='font-inter font-medium text-lg text-white'>Be the first to hear from us about our new offering</h4>
                    </div>

                    <div className='mt-1 max-w-[305px] w-full mx-auto'>
                        <p className='font-inter font-normal text-base text-[#E9D7FE]'>We’ll send you a nice letter once per week. No spam.</p>
                    </div>
                </div>
                

                <div>
                    <form className='w-full'>

                        <input className='w-full h-11 mb-4 py-[10px] px-[15px] border-0 outline-0 rounded font-inter font-normal text-base text-[#667085]' type="email" name="email" id="email"placeholder='Enter your email' />

                        <button className='w-full h-11 rounded text-white bg-[#EF8500] font-inter font-medium text-base' type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;