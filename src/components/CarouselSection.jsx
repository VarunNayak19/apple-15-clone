import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Carousel1Img, Carousel2Img, Carousel3Img, Carousel4Img, Carousel5Img, arrowImg } from '../utils';
import { useGSAP } from '@gsap/react';
import { animateWithGsap, animateWithGsapTimeline } from '../utils/animations';
import gsap from 'gsap';

const images = [
  { src: Carousel1Img, title: 'Image 1', bold:'' },
  { src: Carousel1Img, title: 'Image 2', bold:'' },
  { src: Carousel1Img, title: 'Image 3', bold:'' },
  { src: Carousel1Img, title: 'Image 4', bold:'' },
  { src: Carousel1Img, title: 'Ultra Wide | Macro', bold:'0.5x' },
  { src: Carousel2Img, title: 'Ultra Wide | 13mm', bold:'0.5x' },
  { src: Carousel3Img, title: 'Main | 35mm', bold:'1x' },
  { src: Carousel4Img, title: 'Telephoto | 48mm', bold:'2x' },
  { src: Carousel5Img, title: 'Telephoto | 120mm', bold:'New 5x' },
];

const CarouselSection = () => {
  useGSAP(() => {
    // animateWithGsap('.car-text', {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   ease: 'power2.inOut',
    // })
    gsap.from(".car-text",{
      y:10,
      opacity:0,
      ease:'power2.inOut',
      duration:1,
        scrollTrigger:{
          trigger:'.car-text',
          start: '20% bottom',
          toggleActions: 'restart reverse restart reverse',
      }
    })
  },[])
    const [activeIndex, setActiveIndex] = useState(0); // Center image initially
    // const [selectedText,setSelectedText] = useState(images[activeIndex + 4].title)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(activeIndex)
    // setSelectedText(images[activeIndex + 5].title)
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    console.log(activeIndex)
    // setSelectedText(images[activeIndex + 5].title)
  };

  return (
    <section>
      <div className='w-full pl-[430px] hidden md:flex car-text'>
        <p className='hiw-text '>With iPhone 15 Pro, you have <br /> multiple focal lengths to work with. <br /> It’s like having{''}
          <span className='text-white'> seven pro lenses in <br /> your pocket</span>
          , everywhere you go.</p>
      </div>
    <div className="md:flex hidden items-center p-2 justify-center h-full pt-8 relative">
      <div className="relative w-full  overflow-hidden px-12">
        <div className="flex justify-center items-center  transform transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 37}%)` }}>
          {images.map((image, index) => {
            const isActive = index === activeIndex + 4;
            const scale = isActive ? 1 : 0.8;
            const opacity = isActive ? 1 : 0.3;

            const props = useSpring({ transform: `scale(${scale})`, opacity });

            return (
              <animated.div key={index} className={`w-2/5 flex-shrink-0 mx-[-20px] ${index < 4 ? 'brightness-0' : ''}`} style={props}>
                <img src={image.src} alt={image.title} className="mx-auto" />
                {/* <div className="mt-4 text-lg text-center">{image.title}</div> */}
              </animated.div>
            );
          })}
        </div>

      </div>

      <div className="absolute bottom-[-50px] right-72 flex space-x-2">
          <button
            className={`p-2 bg-arrow text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={prevSlide}
            disabled={activeIndex === 0}
          >
            <img src={arrowImg} alt="" className=' rotate-180 invert' />
          </button>
          <button
            className={`p-2 bg-arrow text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={nextSlide}
            disabled={activeIndex === images.length - 5}
          >
            <img src={arrowImg} alt="" className='invert' />
          </button>
        </div>
      
    </div>
    <div className='w-full text-center mt-4 hidden md:flex justify-center gap-2 duration-100'><span className='text-[19px] font-semibold'>{images[activeIndex + 4].bold}</span><span className='text-[19px] text-gray-100 font-semibold'>{images[activeIndex + 4].title}</span></div>
    </section>
  );
}

export default CarouselSection;
