import profilepic from '../assests/profilepic.png';
import {TypeAnimation } from 'react-type-animation';

function Hero() {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 '>

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[420px] sm:w-[270px] sm:pl-2'>
                <img src={profilepic} className=''/>
            </div>

            <div className='col-span-2 px-5 my-auto ml-5 text-blue-700'>

                <h1 className=' text-4xl sm:text-4xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                        I am a 
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Web Designer",
                            1000,
                            "Frontend Developer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeact={Infinity}
                    />
                </h1>

                <p className=' sm:text-lg my-6 lg:text-xl'>
                    My name is Kumar Sourav and I am a  web developer with a passion for creating beautiful and functional websites.
                </p>
            </div>

        </div>    
    )
}

export default Hero;