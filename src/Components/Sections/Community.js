import React from 'react';

function Community(props) {
    return (
        <div className='bg-[#F8FcFF] hidden md:block'>
            {/* px-[78px] */}
            <div className='grid grid-cols-2 gap-9 py-32  items-center w-4/5 mx-auto'>
                <div className='max-w-[546px]'>
                    <div>
                        <h2 className='text-[#013653] text-left font-gilroy font-extrabold text-5xl'>
                        Trusted by thousands of <span className='text-[#F75500]'>users</span> and <span className='text-[#F75500]'>communities</span> nationwide 
                        </h2>
                    </div>

                    <div>
                        <p className='font-avenir font-normal text-left text-xl text-[#595E6A] mb-14 mt-[52px]'>
                        With LOLA, onboarding Cooperative Societies has been made easy. You can easily setup different account type, create new account for members, setup loans and lot more.
                        </p>
                    </div>

                    <div>
                        <button className='flex flex-row justify-center items-center py-4 px-7 gap-2 max-w-[167px] h-[60px] bg-[#009FF5] rounded-lg font-avenir font-bold text-xl text-white'>Get Started</button>
                    </div>
                </div>

                <div className='grid gap-9'>

                    <div className='flex flex-col gap-[34px] p-8 items-start max-w-[460px] w-full  bg-white rounded-xl'>
                        <div>
                            <p className='text-left'>With Lola, view and monitor users activity to see what each member of the community has made payments or is consistently making payments.</p>
                        </div>

                        <div className='flex flex-row gap-3 items-center'>

                            <div className='max-w-[54px] h-[54px] w-full rounded-full'>
                                <img src="/Images/customer.png" alt="#customer" />
                            </div>

                            <div>
                                <h3 className='font-avenir font-semibold text-base drop-shadow-md'>Kayode Ejiro</h3>
                                <p className='font-avenir font-normal text-sm text-[#737373]'>Chairman FIRS </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[34px] justify-self-center p-8 items-start max-w-[460px] w-full  bg-white rounded-xl'>
                        <div>
                            <p className='text-left'>With Lola, view and monitor users activity to see what each member of the community has made payments or is consistently making payments.</p>
                        </div>

                        <div className='flex flex-row gap-3 items-center'>

                            <div className='max-w-[54px] h-[54px] w-full rounded-full'>
                                <img src="/Images/customer.png" alt="#customer" />
                            </div>

                            <div>
                                <h3 className='font-avenir font-semibold text-base drop-shadow-md'>Kayode Ejiro</h3>
                                <p className='font-avenir font-normal text-sm text-[#737373]'>Chairman FIRS </p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-[34px] p-8 items-start max-w-[460px] w-full  bg-white rounded-xl'>
                        <div>
                            <p className='text-left'>With Lola, view and monitor users activity to see what each member of the community has made payments or is consistently making payments.</p>
                        </div>

                        <div className='flex flex-row gap-3 items-center'>

                            <div className='max-w-[54px] h-[54px] w-full rounded-full'>
                                <img src="/Images/customer.png" alt="#customer" />
                            </div>

                            <div>
                                <h3 className='font-avenir font-semibold text-base drop-shadow-md'>Kayode Ejiro</h3>
                                <p className='font-avenir font-normal text-sm text-[#737373]'>Chairman FIRS </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Community;