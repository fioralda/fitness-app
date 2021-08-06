import AboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <div className='w-screen h-screen flex relative'>
      <div className='w-1/2 h-full bg-fioralda-blue'>
        <div className='flex flex-col justify-center h-full'>
          <div className='flex justify-end items-center h-full'>
            <div className='border bg-white  w-10/12 z-20 lg:w-6/12  h-1/3 shadow-2xl'>
              <p className='text-3xl font-semibold px-8 flex flex-col justify-center h-full'>
                We Are Here to Guide You on Your Journey to Wellness
                <div className='pt-10'>
                  <button className='text-sm bg-fioralda-pink hover:bg-fioralda-orange p-2 font-medium '>
                    LEARN MORE
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-full relative'>
        <div className='bg-yellow w-full h-full bg-no-repeat bg-bottom absolute'></div>
        <div className='bg-circle w-full h-full bg-no-repeat bg-bottom absolute top-4 right-2'></div>
      </div>
      <div className='flex pt-60 absolute left-1/3 z-10 mr-10'>
        <div className='lg:pl-60'>
          <img
            src={AboutImage}
            alt=''
            className='object-none object-center transform scale-125'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
