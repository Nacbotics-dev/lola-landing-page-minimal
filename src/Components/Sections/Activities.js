import React from 'react';

function Activities() {
    return (
        <div className='flex flex-row flex-wrap justify-around bg-white items-center py-11 md:py-24 md:px-28'>
            <div className='hidden md:flex flex-row gap-[24px] max-w-[517.58px] min-h-[646px] w-full h-full'>
                <div className="flex flex-col gap-[21.92px]">
                    <div className='max-w-[246.65px] h-[283.46px] rounded-[15px]'>
                        <img src="/Images/Activities/1.png" alt="" />
                    </div>
                    <div className='max-w-[246.65px] h-[283.46px] rounded-[15px]'>
                        <img src="/Images/Activities/2.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-[21.92px] justify-end">
                    <div className='max-w-[246.65px] h-[283.46px] rounded-[15px]'>
                        <img src="/Images/Activities/3.png" alt="" />
                    </div>

                    <div className='max-w-[246.65px] h-[283.46px] rounded-[15px]'>
                        <img src="/Images/Activities/4.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='max-w-[346px] mx-auto mt-[42px] w-full text-center md:max-w-[591px] md:text-left'>
                <div>
                    <h2 className='font-inter text-3xl font-medium leading-[38px] text-[#013653] tracking-tight md:font-gilroy md:font-extrabold md:text-[38px]'>Keep track of your activities</h2>
                </div>
                <div className='mt-1 md:mt-0'>
                    <p className='hidden font-inter text-base  text-[#667085] font-normal md:text-lg md:font-avenir md:block'>LOLA provides features that allows Communities keep tracks of their activity logs, assign roles and permission.</p>
                    <p className='block font-inter text-base  text-[#667085] font-normal md:text-lg md:font-avenir md:hidden '>LOLA provides features that allows Communities keep tracks of their activity logs, assign roles and permission to specific users and also get instant notification for any action triggered.</p>
                </div>

                <div>
                    <div className='flex flex-row w-full text-left gap-4 mt-14 md:gap-8'>
                        <div>
                            <img src="/Images/featured_icon.svg" alt="featured" />
                        </div>
                        <div className='max-w-[306.67px] w-full md:max-w-[520px]'>
                            <div>
                                <h3 className='font-inter font-medium text-lg text-[#101828] md:font-extrabold md:text-xl md:font-gilroy'>Role and Permission</h3>
                            </div>

                            <div className='mt-2 md:mt-[18px]'>
                                <p className='font-inter text-base capitalize text-[#667085] font-normal md:font-avenir md:text-lg'>With Lola, you can easily set role and permission for different members of your community as an Admin.</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row w-full text-left gap-4 mt-14 md:gap-8'>
                        <div>
                            <img src="/Images/featured_icon.svg" alt="featured" />
                        </div>
                        <div className='max-w-[306.67px] w-full md:max-w-[520px]'>
                            <div>
                                <h3 className='font-inter font-medium text-lg text-[#101828] md:font-extrabold md:text-xl md:font-gilroy'>User Activity log</h3>
                            </div>

                            <div className='mt-2 md:mt-[18px]'>
                                <p className='font-inter text-base capitalize text-[#667085] font-normal md:font-avenir md:text-lg'>With Lola, view and monitor users activity to see what each member of the community has made payments or is consistently making payments.</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row w-full text-left gap-4 mt-14 md:gap-8'>
                        <div>
                            <img src="/Images/featured_icon.svg" alt="featured" />
                        </div>
                        <div className='max-w-[306.67px] w-full md:max-w-[520px]'>
                            <div>
                                <h3 className='font-inter font-medium text-lg text-[#101828] md:font-extrabold md:text-xl md:font-gilroy'>Notification</h3>
                            </div>

                            <div className='mt-2 md:mt-[18px]'>
                                <p className='font-inter text-base capitalize text-[#667085] font-normal md:font-avenir md:text-lg'>With Lola, you can easily set role and permission for different members of your community as an Admin.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Activities;