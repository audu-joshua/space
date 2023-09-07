"use client"
import React,{useState, useEffect} from 'react'
import {Bellefair} from 'next/font/google'
const bellefair = Bellefair({subsets: ['latin'], weight:'400'})


export function Technology() {

    const[selectedTechnology, SetSelectedTechnology] = useState('LaunchVehicle')
    const handleCrewMemberClick = (crew: string) => {
      SetSelectedTechnology(crew);
    };

    const[TechnologyInfo, SetTechnologyInfo] = useState<TechnologyInfo>({

      LaunchVehicle:{
        name: 'Launch Vehicle',
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      SpacePort:{
        name: 'Spaceport',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      },

      SpaceCapsule:{
        name: 'Space Capsule',
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      }

    })

    interface TechnologyInfo {
        [key: string]: {
          name: string;
          description: string;
        };
      }
    
      const handleLocationClick = (technology: React.SetStateAction<string>) => {
        SetSelectedTechnology(technology);
      }

      const Styles = {
        bgImageMobile:{
            backgroundImage:'url("/images/MobileTechnology.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
        },

        bgImageTablet:{
            backgroundImage:'url("/images/TabletTechnology.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        },

        bgImageDesktop:{
            backgroundImage:'url("/images/DesktopTechnology.png")',
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
    <div style={getBackgroundStyle()} className='h-screen grid pt-24 md:pt-32 gap-0.5 lg:gap-0'>
      <div className="text-white text-base font-normal uppercase md:text-xl lg:text-2xl tracking-widest h-fit flex gap-4 justify-center md:justify-start px-6 md:justify-right"> <strong className="opacity-25 text-white text-base md:text-xl lg:text-2xl font-bold tracking-widest">03</strong> Space Launch 101
      </div>

      <div className='flex flex-col justify-between lg:flex-row-reverse'>
      <div className='grid items-center justify-center h-fit lg:w-[50%] lg:h-full'>
      {selectedTechnology === 'LaunchVehicle' && <img src='/images/Tech1.png' className=' w-screen'/>}
      {selectedTechnology === 'SpacePort' && <img src='/images/Tech2.png' className=' w-screen'/>}
      {selectedTechnology === 'SpaceCapsule' && <img src='/images/Tech3.png' className=' w-screen'/>}
      </div>


      <div className='grid lg:flex justify-between lg:justify-normal lg:w-[70%]'>
      <div className='flex lg:grid justify-between lg:justify-between lg:gap-12 md:justify-evenly px-16 h-fit group pb-4'>
      <h2
    onClick={() => handleCrewMemberClick('LaunchVehicle')}
    className={`w-10 h-10 md:w-14 md:h-14 rounded-full border text-lg border-white cursor-pointer items-center flex justify-center transition md:text-2xl md:font-extrabold duration-300 ease-in-out ${
      selectedTechnology === 'LaunchVehicle' ? 'bg-white text-black' : ''
    }`}
  > 1 </h2>
  <h2
    onClick={() => handleCrewMemberClick('SpacePort')}
    className={` w-10 h-10 md:w-14 md:h-14 rounded-full border border-white text-lg cursor-pointer items-center flex justify-center transition md:text-2xl md:font-extrabold duration-300 ease-in-out ${
      selectedTechnology === 'SpacePort' ? 'bg-white text-black' : ''
    }`}
  > 2 </h2>
  <h2
    onClick={() => handleCrewMemberClick('SpaceCapsule')}
    className={` w-10 h-10 md:w-14 md:h-14 rounded-full border border-white text-lg cursor-pointer items-center flex justify-center md:text-2xl md:font-extrabold transition duration-300 ease-in-out ${
      selectedTechnology === 'SpaceCapsule' ? 'bg-white text-black' : ''
    }`}
  > 3 </h2>
</div>

      <div className='grid px-6 lg:w-full'>
        <p className={`${bellefair.className} text-center lg:text-start text-indigo-200 text-lg md:text-xl lg:text-2xl font-normal leading-normal uppercase`}>THE TERMINOLOGY…</p>
        <h1 className={`${bellefair.className} text-center lg:text-start text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-10 uppercase`}> {TechnologyInfo[selectedTechnology].name}</h1>
        <div className='flex md:justify-center lg:justify-start'>
        <p className={`${bellefair.className} text-center lg:text-start text-indigo-200 text-base font-normal leading-normal pb-4 border-b border-solid border-[#383B4B] md:w-[70%] lg:w-full md:text-xl lg:text-2xl`}>{TechnologyInfo[selectedTechnology].description}</p>
        </div>
      </div> 
      </div>
      </div>
    </div>
  )
}


