import proj1 from '../assests/proj1.png';
import proj2 from '../assests/proj2.png';

function Work() {

    return (
        <div className='max-w-[1200px] mx-auto p-5 ' id='work'>
            <div className='pb-8  '>
                <p className='text-4xl mb-3 font-bold primary-color '>Work</p>
                <p className=' text-gray-400 '>Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative ' >
                    <img src={proj1}  alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center '>
                        <span className='text-2xl font-bold text-white tracking-wider '>TodoList </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Live
                                </button>
                            </a>
                            <a href="https://github.com/kumar01dev/TodoList-ContextAPI" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative ' >
                    <img src={proj2}  alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center '>
                        <span className='text-2xl font-bold text-white tracking-wider '>Currency Converter </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Live
                                </button>
                            </a>
                            <a href="https://github.com/kumar01dev/Currency-Converter" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work;