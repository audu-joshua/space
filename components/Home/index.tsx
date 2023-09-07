"use client"
import React, {useState, useEffect} from 'react'
import {Barlow_Condensed} from 'next/font/google'
const barlow = Barlow_Condensed({subsets: ['latin'], weight:'400'})

export function HomeBody() {

        const Styles = {
        bgImageMobile:{
            backgroundImage:'url("/images/MobileHome.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            backgroundColor: 'white'
        },

        bgImageTablet:{
            backgroundImage:'url("/images/TabletHome.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        },

        bgImageDesktop:{
            backgroundImage:'url("/images/DesktopHome.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        }
    }

    const [viewport, Setviweport] = useState("");
    useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768){
            Setviweport('mobile');
        }else if(width >= 768 && width < 1024){
            Setviweport('tablet')
        }else{
            Setviweport('laptop')
        }
    };

    //Add Event Listener to Track Window's Resizekd
    window.addEventListener('resize', handleResize);
    // Initialize Check on Component Mount
    handleResize();
    // Claen up the event Listener on Component unmount 
    return () => {
        window.removeEventListener('resize', handleResize);
    };

}, [])

    const getBackgroundStyle = () => {
        switch (viewport){
            case 'mobile':
                return Styles.bgImageMobile;
            case 'tablet':
                return Styles.bgImageTablet
            case 'laptop':
                return Styles.bgImageDesktop;
            default:
                return {};
        }
    }

  return (
    <div className='h-screen grid text-center px-6 lg:flex' style={getBackgroundStyle()}>
      <div className='grid lg:pl-14'>
      <div className={`${barlow.className} text-center lg:w-fit lg:text-start text-indigo-200 text-base md:text-xl font-normal tracking-widest mt-32 md:mt-40 lg:text-2xl`}>
        SO, YOU WANT TO TRAVEL TO
    </div>

    <div className="text-center text-white text-7xl lg:w-fit md:text-9xl lg:text-[140px] font-normal leading-10 lg:text-start">
        SPACE
    </div>

    <div className={` ${barlow.className}text-center lg:justify-start md:flex md:justify-center text-indigo-200 text-base md:text-lg font-normal leading-normal`}><p className='md:w-[70%] md:text-xl lg:text-2xl lg:text-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    </div>

    <div className='flex items-center justify-center lg:pt-36'>
        <div className=" w-[36px] h-[36px] p-32  bg-white rounded-full flex justify-center items-center">
        <h2 className="text-center text-gray-950 text-xl md:text-[32px] font-normal tracking-wider">
            EXPLORE
        </h2>
        </div>
    </div>
    </div>
  )
}

