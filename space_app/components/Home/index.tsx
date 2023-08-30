"use client"
import React, {useState, useEffect} from 'react'
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
            console.log("Correct on mobile")
        }else if(width >= 768 && width < 1024){
            Setviweport('tablet')
            console.log("Correct on Tablet")
        }else{
            Setviweport('laptop')
            console.log("Correct on Desktop")
        }
    };

    //Add Event Listener to Track Window's Resize
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
    <div className='h-screen grid' style={getBackgroundStyle()}>
      <div className="text-center text-indigo-200 text-base font-normal tracking-widest mt-32">
        SO, YOU WANT TO TRAVEL TO
    </div>

    <div className="w-80 text-center text-white text-7xl font-normal leading-10">
        SPACE
    </div>

    <div className="w-80 text-center text-indigo-200 text-base font-normal leading-normal">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
    </div>

    <div className="w-36 h-36 bg-white rounded-full" />
        <div className="text-center text-gray-950 text-xl font-normal tracking-wider">
            EXPLORE
        </div>
    
    
    </div>
  )
}

