import React from 'react';

function OurServices(props) {
    return (
        <div className='bg-white'>
            <div className='max-w-[318px] w-full mx-auto sm:pt-[94px] mb-16 md:max-w-[543px]'>
                <div className='mb-6'>
                    <h2 className='font-inter font-medium text-3xl leading-[38px] tracking-tight text-[#101828] md:font-extrabold md:text-3xl md:font-gilroy'>Our Services</h2>
                </div>
                <p className='font-inter text-base font-normal text-center  text-[#667085] md:font-avenir md:text-xl'>
                Our solution helps you manage your collections, disbursements and other financial operations seamlessly.
                </p>
            </div>

            <div className='hidden pb-[94px] md:block'>
                <div>
                    <nav className='flex justify-evenly h-[52px] max-w-[924px]  w-full mx-auto list-none items-center'>
                        <li className='active max-w-[231px] h-[52px] items-center grid font-avenir not-italic font-bold text-xl text-[#F75500]'>Account</li>
                        <li className='max-w-[231px] h-[52px] items-center grid font-avenir not-italic font-normal text-xl text-black'>Executive</li>
                        <li className='max-w-[231px] h-[52px] items-center grid font-avenir not-italic font-normal text-xl text-black'>Community</li>
                        <li className='max-w-[231px] h-[52px] items-center grid font-avenir not-italic font-normal text-xl text-black'>Collection</li>
                    </nav>
                </div>

                <div className='flex flex-wrap gap-[60px] my-[94px] justify-center items-center'>
                    <div className='max-h-[369px] max-w-[585px]'>
                        <img src="/Images/AccountImage.png" alt="#" />
                    </div>

                    <div className='max-w-[416px]'>
                        <div>
                        <h2 className='font-gilroy font-extrabold text-2xl text-left'>Account Management</h2>
                        </div>
                        <div className='my-11'>
                            <p className='font-avenir font-normal text-xl text-left text-[#667085]'>LOLA enables communities setup different account types for different collections and easily receive money in those accounts and easily 
                            receive money in those accounts.</p>
                        </div>

                        <div className='flex flex-row items-center max-w-[101.41px] h-6 gap-2'>
                            <a className='font-avenir font-semibold text-base text-[#F75500]' href="#getstarted">Get Started</a>
                            <img src="/Images/arrow.svg" alt="#" />
                        </div>
                    </div>

                </div>
            </div>


            <div className='block md:hidden'>
                <div className='max-w-[298px] w-full flex flex-col p-6 text-left mx-auto mb mb-[18px] items-start rounded-xl bg-[#F8E7D2]'>
                    <div className='max-w-[56px] w-full'>
                        <img src="Images/Services/1.svg" alt="#AccountsMgnt" />
                    </div>

                    <div className='mt-16 mb-5'>
                        <div>
                            <h3 className='font-inter font-medium text-lg leading-[30px] text-[#F75500]'>Account Management</h3>
                        </div>

                        <div className='mt-2'>
                            <p className='font-inter text-base font-normal text-[#667085]'>
                            LOLA enables communities setup different account types for different collections and easily receive money in those accounts
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="#AccountsMgnt" className='font-inter font-medium text-base text-[#F7941D]'>Learn more</a>
                    </div>
                </div>

                <div className='max-w-[298px] w-full flex flex-col p-6 text-left mx-auto mb mb-[18px] items-start rounded-xl bg-[#DEF5FA]'>
                    <div className='max-w-[56px] w-full'>
                        <img src="Images/Services/2.svg" alt="#AccountsMgnt" />
                    </div>

                    <div className='mt-16 mb-5'>
                        <div>
                            <h3 className='font-inter font-medium text-lg leading-[30px] text-[#009FF5]'>Collection Management</h3>
                        </div>

                        <div className='mt-2'>
                            <p className='font-inter text-base font-normal text-[#667085]'>
                            We provide a smooth support for creating different collection types, and setting unique criterias
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="#CollectionsMgnt" className='font-inter font-medium text-base text-[#009FF5]'>View integration</a>
                    </div>
                </div>

                <div className='max-w-[298px] w-full flex flex-col p-6 text-left mx-auto mb mb-[18px] items-start rounded-xl bg-[#DEF5FA]'>
                    <div className='max-w-[56px] w-full'>
                        <img src="Images/Services/3.svg" alt="#ExecutiveMgnt" />
                    </div>

                    <div className='mt-16 mb-5'>
                        <div>
                            <h3 className='font-inter font-medium text-lg leading-[30px] text-[#009FF5]'>Executive Management</h3>
                        </div>

                        <div className='mt-2'>
                            <p className='font-inter text-base font-normal text-[#667085]'>
                            Our solution makes it easier to transition a member into an executive based on Community Executive's selection strate
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="#ExecutiveMgnt" className='font-inter font-medium text-base text-[#009FF5]'>Learn more</a>
                    </div>
                </div>


                <div className='max-w-[298px] w-full flex flex-col p-6 text-left mx-auto mb mb-[18px] items-start rounded-xl bg-[#F8E7D2]'>
                    <div className='max-w-[56px] w-full'>
                        <img src="Images/Services/4.svg" alt="#CommunityMgnt" />
                    </div>

                    <div className='mt-16 mb-5'>
                        <div>
                            <h3 className='font-inter font-medium text-lg leading-[30px] text-[#F75500]'>Community Management</h3>
                        </div>

                        <div className='mt-2'>
                            <p className='font-inter text-base font-normal text-[#667085]'>
                            LOLA enables Communities view members payments, attract new members and provide other financial features for members.
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="#CommunityMgnt" className='font-inter font-medium text-base text-[#F7941D]'>Learn more</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default OurServices;