import React from 'react';

function HomeBanner(props) {
    return (
        // px-20
        <div className='pt-[62px] md:py-[163px]  sm:bg-[#F9FAFB] w-full'>
            {/* pl-[42px]  pr-14  */}
            {/* flex flex-row flex-wrap */}
            <div className='w-[90%] grid-cols-1  grid justify-items-center mx-auto gap-5  md:pt-[114px]  lg:grid-cols-2'>
                <div className='max-w-[557px] w-full text-center md:text-left'>

                    <h1 className='font-inter text-[#101828] leading-[38px]  text-[34px] font-medium tracking-tight  sm:font-gilroy md:font-extrabold md:text-7xl'>
                        Create wealth 
                        for <span className='text-[#F75500]'>you</span> and your <span className='text-[#F75500]'>community</span>
                    </h1>

                    <div className='mb-[38px] mt-[48px]'>
                        <p className='font-inter font-normal text-[#667085]  leading-6 text-lg md:font-gilroy md:text-2xl'>
                            Our solution helps you manage your collections, 
                            disbursements and other financial operations 
                            seamlessly.
                        </p>
                    </div>


                    <button className='max-w-[343px] w-full h-12  bg-[#009FF5] text-white font-inter text-base font-medium rounded  md:font-bold md:text-xl md:w-60 md:h-[60px] md:font-avenir'>Sign Up for free</button>
                    <button className='max-w-[343px] w-full h-12 mt-3  border-[#009FF5] border-2 text-[#009FF5] font-inter text-base font-medium rounded md:hidden'>Login</button>

                    <div className="hidden md:flex flex-row mt-[38px]">
                        <button 
                        className='bg-no-repeat max-w-[103.91px] w-full h-8'
                        style={{backgroundImage:'url(/Images/Badges/appstore.png)'}}>

                        </button>

                        <button 
                        className='bg-no-repeat max-w-[103.91px] w-full h-8'
                        style={{backgroundImage:'url(/Images/Badges/googleplay.png)'}}>
                            
                        </button>

                    </div>
                    
                </div>

                <div className='mt-[46px] grid grid-cols-5 items-center gap-5 max-w-[566px] w-full md:mt-0'>
                    <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                        <img src="/Images/Maskgroup/1.png" alt="mask1" />
                    </div>

                    <div className="flex flex-col">
                        <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                            <img src="/Images/Maskgroup/2.png" alt="mask1" />
                        </div>
                        <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                            <img src="/Images/Maskgroup/3.png" alt="mask1" />
                        </div>
                    </div>


                    <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                        <img src="/Images/Maskgroup/4.png" alt="mask1" />
                    </div>

                    <div className="flex flex-col">
                        <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                            <img src="/Images/Maskgroup/5.png" alt="mask1" />
                        </div>
                        <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                            <img src="/Images/Maskgroup/6.png" alt="mask1" />
                        </div>
                    </div>

                    <div className='max-w-[95.71px] w-full max-h-[255.23px]'>
                        <img src="/Images/Maskgroup/7.png" alt="mask1" />
                    </div>
                    
                </div>
            
            </div>
        </div>
    );
}

export default HomeBanner;