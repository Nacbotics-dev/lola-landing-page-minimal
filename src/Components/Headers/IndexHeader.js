import React,{useState} from 'react';
// import NavBar from './NavBar/NavBar';
import { Link,useLocation } from 'react-router-dom';



function IndexHeader(props) {
    const [isActive,setisActive] = useState(true)
    const [CloseNav,setCloseNav] = useState(true)

    //destructuring pathname from location
    const { pathname } = useLocation();
    let currentPath = pathname.split("/");

    const setActiveBar = ((e)=>{
        var marker = document.querySelector("#marker");
        marker.style.left = `${e.target.offsetLeft}px`
        marker.style.width = `${e.target.offsetWidth}px`
        setisActive(false)
        toggleIcon()

    })

    const toggleIcon =(()=>{
        var mobNav = document.querySelector("#mobileNavBar");
        setCloseNav(!CloseNav)

        if (CloseNav) {
            mobNav.style.top = '1px'
            
        } else {
            mobNav.style.top = '-850px'
        }
    })


    return (
        <div className='h-[72px] border-[1px] border-[#F2F4F7] w-full absolute md:h-[102px] bg-white'>
            <div className='w-[90%] h-full mx-auto flex flex-row justify-between items-center'>
                <div className='w w-[58px] h-8 sm:w-[104px] sm:h-[58px]'>
                    <img src='/Images/lolo_logo.svg' alt='logo'></img>
                </div>
                
                <div className="hidden md:flex flex-row justify-evenly w-[308px] h-6">
                        <Link to='#about' className='text-black font-avenir font-normal text-lg' >About us</Link>
                        <Link to='#contact' className='text-black font-avenir font-normal text-lg' >Contact us</Link>
                        <Link to='#faq' className='text-black font-avenir font-normal text-lg' >FAQs</Link>

                </div>

                <div className='hidden md:flex flex-row  gap-3 items-center justify-between'>
                    <button className='w-[100px] h-[60px] bg-white border border-[#009ff5] rounded py-4 px-7 font-bold text-xl text-[#009FF5]'>Login</button>
                    <button className='w- w-60 h-[60px] bg-[#009ff5] rounded-lg py-4 px-7 font-bold text-xl text-white'>Sign Up for free</button>
                </div>

                <div onClick={toggleIcon} className='md:hidden'>
                    {
                        CloseNav ?
                    
                    <svg 
                    className="h-6 w-6" 
                    fill="#000000" stroke="#000000" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    :
                    <svg 
                        className="h-6 w-6" fill="#000000" stroke="#000000"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2" d="M6 18L18 6M6 6l12 12">   
                        </path>
                    </svg>
                    }

                </div>

                
            </div>

            <div id='mobileNavBar' className='flex flex-col w-full h-screen min-h-screen transition_0_5s bg-white relative top-[-850px] sm:hidden'>
                <div className='pt-[179px] flex flex-col text-center'>

                    <Link to='#about' className='text-black font-inter font-normal text-lg leading-6'>About us</Link>
                    <Link to='#contact' className='text-black font-inter font-normal text-lg leading-6 mt-10'>Contact us</Link>
                    <Link to='#faq' className='text-black font-inter font-normal text-lg leading-6 mt-10'>FAQs</Link>

                </div>

                <div className='flex flex-col mt-[38px]  gap-3 items-center justify-between'>
                    <button className='max-w-[343px] w-full h-[48px]  bg-[#009ff5]  text-white px-5 py-3 font-inter font-medium text-base rounded'>Create account for free</button>
                    <button className='max-w-[343px] w-full h-[48px] bg-white border border-[#009ff5] text-[#009FF5] px-5 py-3 font-inter font-medium text-base rounded'>Login</button>
                </div>
            </div>

        </div>
    );
}

export default IndexHeader;