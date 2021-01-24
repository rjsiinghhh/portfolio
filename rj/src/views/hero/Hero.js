import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import './Hero.css'


const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      mode: 'scroll',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./rocket.json'),
      autoSize:"height: 50%"
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <div className="hero">
      <div className="style">

    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-1/5'>
        <div className='container' ref={container} height={90}>
        </div>
      </div>
    </section>
      </div>
          </div>
  );
};

export default Hero;