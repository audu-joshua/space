"use client"
import React,{useState, useEffect} from 'react'
import {Bellefair} from 'next/font/google'
const bellefair = Bellefair({subsets: ['latin'], weight:'400'})


export function Crew() {

    const[selectedCrew, SetSelectedCrew] = useState('Commander')
    const handleCrewMemberClick = (crew: string) => {
      SetSelectedCrew(crew);
    };

    const[CrewInfo, SetCrewInfo] = useState<CrewInfo>({

      Commander:{
        name: 'Douglas Hurley',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        title: 'Commander '
      },
      MissionSpecialist :{
        name: 'MARK SHUTTLEWORTH',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        title: 'Mission Specialist '
      },
      Pilot :{
        name: 'Victor Glover',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        title: 'Pilot '
      },

      FlightEngineer :{
        name: 'Anousheh Ansari',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        title: 'Flight Engineer'
      }

    })

    interface CrewInfo {
        [key: string]: {
          name: string;
          description: string;
          title: string;
        };
      }
    
      const SelectedCrewClass = 'p-3 bg-white rounded-full'
      const UnselectedCrewClass = 'bg-red p-3 rounded-full'

      const handleLocationClick = (crew: React.SetStateAction<string>) => {
        SetSelectedCrew(crew);
      }

      const Styles = {
        bgImageMobile:{
            backgroundImage:'url("/images/MobileCrew.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
        },

        bgImageTablet:{
            backgroundImage:'url("/images/TabletCrew.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        },

        bgImageDesktop:{
            backgroundImage:'url("/images/TabletCrew.jpg")',
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
    <div style={getBackgroundStyle()} className='h-screen grid px-6 pt-24 md:pt-32 gap-0.5 overflow-hidden'>
      <div className="text-white lg:text-2xl text-base font-normal uppercase tracking-widest h-fit flex gap-4 justify-center md:text-xl md:justify-start"> <strong className="opacity-25 text-white text-base md:text-xl lg:text-2xl font-bold tracking-widest">02</strong> Meet Your Crew
      </div>

      <div className='flex flex-col gap-8 md:flex-col-reverse md:justify-between lg:justify-evenly lg:flex-row-reverse  lg:h-fit'>
      <div className='grid items-center justify-center h-fit border-b-2 border-solid border-[#383B4B] lg:w-[30%]'>
      {selectedCrew === 'Commander' && <img src='/images/crew1.png' className=' md:w-[450px]'/>}
      {selectedCrew === 'MissionSpecialist' && <img src='/images/crew2.png' className=' md:w-[380px] lg:w-[300px]'/>}
      {selectedCrew === 'Pilot' && <img src='/images/crew3.png' className=' md:w-[450px] lg:w-[400px]'/>}
      {selectedCrew === 'FlightEngineer' && <img src='/images/crew4.png' className=' md:w-[550px] lg:w-[900px]'/>}
      </div>

      <div className='flex flex-col gap-8 md:flex-col-reverse lg:justify-center lg:w-[40%]'>
      <div className='flex justify-between md:justify-evenly px-3 lg:px-20 h-fit group'>
      <div
    onClick={() => handleCrewMemberClick('Commander')}
    className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border  border-white cursor-pointer transition duration-300 ease-in-out ${
      selectedCrew === 'Commander' ? 'bg-white' : ''
    }`}
  ></div>
  <div
    onClick={() => handleCrewMemberClick('MissionSpecialist')}
    className={` w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white cursor-pointer transition duration-300 ease-in-out ${
      selectedCrew === 'MissionSpecialist' ? 'bg-white' : ''
    }`}
  ></div>
  <div
    onClick={() => handleCrewMemberClick('Pilot')}
    className={` w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white cursor-pointer transition duration-300 ease-in-out ${
      selectedCrew === 'Pilot' ? 'bg-white' : ''
    }`}
  ></div>
  <div
    onClick={() => handleCrewMemberClick('FlightEngineer')}
    className={` w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white cursor-pointer transition duration-300 ease-in-out ${
      selectedCrew === 'FlightEngineer' ? 'bg-white' : ''
    }`}
  ></div>
</div>

      <div>
      <div className='grid gap-4 md:text-end md:items-center'>
        <p className={`${bellefair.className} text-center lg:text-start text-indigo-200 text-lg md:text-xl lg:text-2xl font-normal leading-normal uppercase`}>{CrewInfo[selectedCrew].title}</p>
        <h1 className={`${bellefair.className} text-center lg:text-start text-white text-2xl md:text-4xl lg:5xl font-normal leading-10 uppercase`}> {CrewInfo[selectedCrew].name}</h1> 
        <div className='md:flex justify-center lg:justify-start'>
        <p className={`${bellefair.className} text-center lg:text-start text-indigo-200 text-base md:text-xl lg:text-2xl font-normal leading-normal md:w-[70%] lg:w-full pb-4`}>{CrewInfo[selectedCrew].description}</p>
        </div>
      </div> 
      </div>
      </div>
      </div>
    </div>
  )
}


