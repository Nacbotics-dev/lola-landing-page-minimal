import React from 'react';

function MissionStatement(props) {
    return (
        <div className='mt-[71px] mb-[50px] block sm:hidden'>

            <div className='max-w-[62px] h-[35px] w-full mx-auto'>
                <img src="/Images/lolo_logo.svg" alt="logo" />
            </div>

            <div className='font-inter font-medium text-3xl leading-[38px] text-center text-[#101828] tracking-tight max-w-[343px]  w-full mx-auto mt-4'>
            ‘‘ We have a vision to give every community the connection, finacial inclusion and empowerment that it deserves ’’
            </div>

            <div className='mt-[33px]'>
                <div className='max-w-[40px] h-[40px] w-full rounded-full mx-auto'>
                    <img src="/Images/customer.png" alt="#customer" />
                </div>

                <div className='text-center mt-[18px]'>
                    <h3 className='font-inter font-medium text-lg text-[#101828]'>Ayobami Damilola</h3>
                    <p className='font-inter text-base font-normal text-[#667085]'>Product Manager, Lola</p>

                </div>
            </div>
            
        </div>
    );
}

export default MissionStatement;