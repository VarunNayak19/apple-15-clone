import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo, vkVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Chip = () => {
    const videoRef = useRef();
    useGSAP(() => {
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:'#chip',
                start: '20% bottom',
                // toggleActions: 'restart reverse restart reverse',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            stagger:0.3
          })
    },[]);
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt='chip' width={180} height={180} />
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                    A17 Pro chip.
                    <br />
                    A monster win for gaming.
                </h2>
                <p className='hiw-subtitle'>It's here. The biggest redesign in the history of Apple GPUs</p>
            </div>

            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" className='bg-transparent relative z-10 pointer-events-none' />
                    </div>
                    <div className='hiw-video'>
                        <video className='pointer-events-none'
                        playsInline preload='none' muted autoPlay loop ref={videoRef}
                        >
                            <source src={frameVideo} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <p className='text-gray font-semibold text-center mt-3 mb-6'>
                    Honkai: Star Rail
                </p>

                <div className='hiw-text-container mb-6 g_fadeIn'>
                    <div className='flex-1 flex justify-center flex-col'>
                        <p className='hiw-text '>A17 Pro is entirely new class of iPhone chip that delivers our {''}
                        <span className='text-white'>best graphic performance so far.</span>
                        </p>
                    </div>

                    <div className='flex-1 flex-center'>
                        <p className='hiw-text '>Mobile {''}
                        <span className='text-white'> games will look and feel so immersive</span>
                         with incredibly detailed environments and characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                    </div>
                  </div>

                <div className="flex-1 flex justify-center flex-col g_fadeIn">
                    <p className="hiw-text">New</p>
                    <p className="hiw-bigtext">Pro-class GPU</p>
                    <p className="hiw-text">with 6 cores</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Chip