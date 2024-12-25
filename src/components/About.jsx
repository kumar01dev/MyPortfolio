import about from '../assests/about.jpg';

function About() {

    return (
        <div className='text-red-800 font-serif max-w-[1200px] mx-auto my-12 ' id="about" >
            
            <div className=' md:grid md:grid-cols-2 sm:py-16 '>

                <div className='mt-4 md:mt-0 text-left flex '>

                    <div className='my-auto mx-6 '>
                        <h2 className='text-4xl font-bold mb-4 primary-color '>
                            About Me
                        </h2>
                        <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate nesciunt. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam ipsam.
                        </p>
                        <br />
                        <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem, eaque nihil quod iusto laborum officiis at, a quisquam soluta fugiat harum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cumque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, molestias quas.
                        </p>
                    </div>

                </div>

                <img className='mx-auto rounded-3xl py-8 md:py-0 ' src={about} alt='' />

            </div>

        </div>
    )
}

export default About;