import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo, vkVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const BatteryScreen = () => {
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

        gsap.from(".b_fadeIn", {

            scrollTrigger: {
                start: '20% bottom',
                trigger: '.b_fadeIn',
                toggleActions: 'restart reverse restart reverse',
            },
            y:10,
            opacity: 0,
        });
    },[]);
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                Battery life that’s
                    <br />
                    positively Pro.
                </h2>
                <p className='hiw-subtitle'>Even with so many advanced new features, iPhone 15 Pro still <br /> gives you amazing all‑day battery life.</p>
            </div>

            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center mb-24'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" className='bg-transparent relative z-10 pointer-events-none' />
                    </div>
                    <div className='hiw-video'>
                        <video className='pointer-events-none'
                        playsInline preload='none' muted autoPlay loop ref={videoRef}
                        >
                            <source src={vkVideo} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <div className='hiw-text-container mb-6 b_fadeIn md:px-24 px-0'>
                    <div className='flex-1 flex justify-center flex-col'>
                    <p className="hiw-text">Up to</p>
                    <p className=" font-semibold text-[72px]">29 hours</p>
                    <p className="hiw-text">video playback on <br /> iPhone 15 Pro Max</p>
                    </div>

                    {/* <div className='flex-1 flex-center'>
                        <p className='hiw-text '>Mobile {''}
                        <span className='text-white'> games will look and feel so immersive</span>
                         with incredibly detailed environments and characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                    </div> */}
                  </div>

                <div className="flex-1 flex justify-center flex-col b_fadeIn md:px-24 px-0">
                    <p className="hiw-text">Up to</p>
                    <p className=" font-semibold text-[72px]">23 hours</p>
                    <p className="hiw-text">video playback on <br /> iPhone 15 Pro</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BatteryScreen;