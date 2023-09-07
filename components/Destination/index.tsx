"use client"
import React, {useState, useEffect} from 'react'
import {Barlow_Condensed} from 'next/font/google'
const barlow = Barlow_Condensed({subsets: ['latin'], weight:'400'})


export function Destination() {

    const [selectedLocation, setSelectedLoaction] = useState('Moon');

    const [locationInfo, setLocationInfo] = useState<LocationInfo>({        
        Moon:{
            name: 'MOON',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            averageDistance: '384,400 km',
            estimatedTravelTime:'3 days'
        }, 
        Mars:{
            name: 'MARS',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            averageDistance: '225 million km',
            estimatedTravelTime:'6 months'
        },

        europa:{
            name: 'EUROPA',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            averageDistance: '628 MIL. km',
            estimatedTravelTime:'3 years'
        }, 

        titan:{
            name: 'TITAN',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            averageDistance: '1.6 BIL. km',
            estimatedTravelTime:'7 years'
        }
        
    })

    interface LocationInfo {
        [key: string]: {
          name: string;
          description: string;
          averageDistance: string;
          estimatedTravelTime: string;
        };
      }

    const handleLocationClick = (location: React.SetStateAction<string>) => {
        setSelectedLoaction(location);
    }

    const SelectedLabelClass = 'border-b-2 border-white border-solid text-white'
    const UnelectedClassLabel = 'cursor-pointer text-white'

    const Styles = {
        bgImageMobile:{
            backgroundImage:'url("/images/MobileDestination.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
        },

        bgImageTablet:{
            backgroundImage:'url("/images/TabletDestination.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        },

        bgImageDesktop:{
            backgroundImage:'url("/images/DesktopDestination.png")',
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
    <div style={getBackgroundStyle()} className='h-screen grid px-6 pt-20 md:pt-32 gap-0.5'>
      <div className="text-white text-base font-normal md:text-xl uppercase tracking-widest h-fit flex gap-4 justify-center md:justify-start lg:text-2xl"> <strong className="opacity-25 text-white text-base md:text-xl font-bold tracking-widest lg:text-2xl">01</strong>Pick your destination
      </div>
    
    <div className='flex flex-col justify-between lg:flex-row'>
      <div className='grid items-center justify-center h-fit py-1 lg:w-[70%] lg:pt-16'>
      {selectedLocation === 'Moon' && <img src='/images/moon.png' className='sm:w-60 sm:h-60 w-36 h-36 md:w-80 md:h-80'/>}
      {selectedLocation === 'Mars' && <img src='/images/mars.png' className='sm:w-60 sm:h-60 w-36 h-36 md:w-80 md:h-80' />}
      {selectedLocation === 'europa' && <img src='/images/europa.png' className='sm:w-60 sm:h-60 w-36 h-36 md:w-80 md:h-80'/>}
      {selectedLocation === 'titan' && <img src='/images/titan.png' className='sm:w-60 sm:h-60 w-36 h-36 md:w-80 md:h-80'/>}
      </div>

    <div>
      <div className='flex justify-between md:justify-evenly lg:px-16 px-3 h-fit pb-6 md:text-xl lg:text-2xl'>
        <p onClick={() => handleLocationClick('Moon')} className={selectedLocation === 'Moon' ? SelectedLabelClass: UnelectedClassLabel}> Moon </p>
        <p onClick={() => handleLocationClick('Mars')} className={selectedLocation === 'Mars' ? SelectedLabelClass: UnelectedClassLabel}> Mars </p>
        <p onClick={() => handleLocationClick('europa')} className={selectedLocation === 'europa' ? SelectedLabelClass: UnelectedClassLabel}> Europa </p>
        <p onClick={() => handleLocationClick('titan')} className={selectedLocation === 'titan' ? SelectedLabelClass: UnelectedClassLabel}> Titan </p>
      </div>

      <div className='grid'>
        <h1 className='text-center text-white text-7xl font-normal md:text-8xl lg:text-[100px] leading-10 pb-4'> {locationInfo[selectedLocation].name}</h1>
        <div className='md:justify-center md:items-center md:flex'>
        <p className={`${barlow.className} text-center lg:text-start text-indigo-200 text-base lg:text-xl md:text-lg font-normal leading-normal pb-6 border-b-2 border-solid border-[#383B4B] md:w-[65%]`}>{locationInfo[selectedLocation].description}</p>
        </div>
        
        
        <div className='text-center py-4 grid gap-3 md:flex md:items-center md:justify-center md:gap-16'>
        <div className='
        grid gap-0.5'>
        <p className='text-[14px] text-[#D0D6F9] md:text-lg'>AVG. DISTANCE:</p>
            <div className='text-[28px] md:text-3xl'> 
            {locationInfo[selectedLocation].averageDistance}
            </div>
        </div>
        
        <div className='grid gap-0.5'>
        <p className='uppercase text-[#D0D6F9] md:text-lg'>EST. TRAVEL Time: </p>
            <div className='text-[28px] md:text-3xl'> 
                {locationInfo[selectedLocation].estimatedTravelTime} 
            </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

