import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/animations'
import gsap from 'gsap'
import { lizardImg } from '../utils'

const CameraFeature = () => {
    useGSAP(() => {
        gsap.from('.camera-feature-title',{
            scrollTrigger:{
                trigger:'.camera-feature-title',
                start: '20% bottom',
                toggleActions: 'restart reverse restart reverse',
            },
            opacity: 0,
            // duration: 1,
            ease: 'power2.inOut',
        })
        gsap.from('.lizardImg',{
            scrollTrigger:{
                trigger:'.lizardImg',
                start: '20% bottom',
                toggleActions: 'play reverse play reverse',
            },
            scale:1.1,
            ease: 'power2.inOut',
            scrub:true
        })
    },[])
  return (
    <section className=''>
        <div className='sm:pt-32 sm:pb-4 pt-20 pb-4 sm:px-10 px-5 screen-max-width overflow-hidden'>
            <div className='flex flex-col pl-8'>
                <h2 className='camera-feature-title leading-5 '>
                    A camera that captures your
                    <br />
                    wildest imagination.
                </h2>

                <p className='camera-feature-subtitle'>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
            </div>
        </div>
        <div className='w-full flex justify-end relative'>
         <img src={lizardImg} alt="" className='lizardImg w-11/12' />
         <p className='absolute md:bottom-20 md:left-36 bottom-4 left-4 text-gray font-semibold'>A green iguana, captured by the 48MP Main camera</p>
        </div>
    </section>
  )
}

export default CameraFeature