import React from 'react';

function IndexFooter(props) {
    return (
        <footer className='grid grid-cols-2 md:grid-cols-3 pt-16 px-[34px] pb-[120px] md:px-[120px] '>
            <div className='hidden text-left max-w-[347px] w-full md:block'>
                <div>
                    <img src="/Images/lolo_logo.svg" alt="" />
                </div>

                <div className='my-[18px]'>
                    <p className='font-avenir font-normal text-xl text-black'>Using the power of technology to harness your Coopreative operations.</p>
                </div>

                <div>
                    <p className='font-avenir font-semibold text-base text-black'>Powered By <a href="#BaseAfrique" className='text-[#009FF5]'>BaseAfrique</a></p>
                </div>
            </div>

            <div className='text-left'>
                <div>
                    <h2 className='font-inter font-semibold text-sm text-[#98A2B3] md:font-avenir md:font-bold md:text-lg md:text-[#F75500]'>Legal</h2>
                </div>

                <ul className='mt-4 md:mt-[38px]'>
                    <li className='font-inter font-medium text-[#667085] md:font-normal text-base md:font-avenir'>Terms</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Privacy</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Cookies</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Licenses</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Settings</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Contact</li>
                </ul>

            </div>


            <div className='text-left'>
                <div>
                    <h2 className='font-inter font-semibold text-sm text-[#98A2B3] md:font-avenir md:font-bold md:text-lg md:text-[#F75500]'>Socials</h2>
                </div>

                <ul className='mt-[38px]'>
                    <li className='font-inter font-medium text-[#667085] md:font-normal text-base md:font-avenir'>Facebook</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>Twitter</li>
                </ul>

            </div>


            <div className='text-left hidden md:block'>
                <div>
                    <h2 className='font-inter font-semibold text-sm text-[#98A2B3] md:font-avenir md:font-bold md:text-lg md:text-[#F75500]'>Contact</h2>
                </div>

                <ul className='mt-[38px]'>
                    <li className='font-inter font-medium text-[#667085] md:font-normal text-base md:font-avenir'>+234-705-2-5036-06</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>hello@lolafinance.com</li>
                    <li className='font-inter font-medium text-[#667085]  text-base mt-3 md:mt-4 md:font-normal md:font-avenir'>sales@lolafinance.com</li>
                </ul>

            </div>

            <div className='text-left mt-[42px]'>
                <h3 className='font-avenir text-base text-[#F75500]'>© 2022 LOLA. All right reserved.</h3>
            </div>
        </footer>
    );
}

export default IndexFooter;