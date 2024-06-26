import React, { useRef, useState } from 'react'
import { PauseIcn, PlayIcn, ReplayIcn, zoomVideo } from '../utils'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { animateWithGsap } from '../utils/animations';

const ZoomFeature = () => {
    useGSAP(() => {
        gsap.to("#video", {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none',
            }
        });
        gsap.from(".text-below-1", {

            scrollTrigger: {
                start: '20% bottom',
                trigger: '.text-below-1',
                toggleActions: 'restart reverse restart reverse',
            },
            y:10,
            opacity: 0,
        });

        gsap.from(".text-below-2", {

            scrollTrigger: {
                start: '90% bottom',
                trigger: '.text-below-2',
                toggleActions: 'restart reverse restart reverse',
            },
            y:10,
            opacity: 0,
  
        });

        gsap.from(".text-below-3", {

            scrollTrigger: {
                start: '70% bottom',
                trigger: '.text-below-3',
                toggleActions: 'restart reverse restart reverse',
            },
            y:10,
            opacity: 0,
        });
    },[])
    const videoRef = useRef();
    const [videoEnd, setvideoEnd] = useState(false);
    const [isPlay, setisPlay] = useState(false);
    const replayFunction = ()=> {
        videoRef.current.play();
        setvideoEnd(false);
        setisPlay(false);
    };
    const playFunction = () => {
        videoRef.current.play();
        setisPlay(false);
    }
    const pauseFunction = () => {
        videoRef.current.pause();
        setisPlay(true);
    }
  return (
    <section className='common-padding'>
        <div className='screen-max-width flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center'>
                  <h2 className='hiw-title'>
                    120 mm of
                      <br />
                    pure Pro zoom.
                  </h2>
              </div>
              <div className='w-full flex items-center justify-center mt-28'>
                <video className='pointer-events-none' id="video"
                onEnded={() => {setvideoEnd(true)}}
                        playsInline preload='none' muted autoPlay ref={videoRef}>
                    <source src={zoomVideo} />
                </video>
              </div>
              <div onClick={() => {
                videoEnd ? replayFunction() : isPlay ? playFunction() : pauseFunction()
              }} className='mt-4 text-gray-100 flex gap-2 items-center'>
                <span>{videoEnd ? 'Replay' : isPlay ? 'Play' : 'Pause'}</span>
                <img className='h-[16px] invert-[0.8]' src={videoEnd ? ReplayIcn : isPlay ? PlayIcn : PauseIcn} alt="" />
              </div>


              <div className='hiw-text-container justify-center my-12 md:px-28 px-2 text-below'>
                  <div className='flex justify-center flex-col text-below-1 w-full md:w-4/12'>
                      <p className='hiw-text '>For iPhone 15 Pro Max, we designed a 5x Telephoto camera with {''}
                          <span className='text-white'>the longest optical zoom of any iPhone ever</span> to fit in our compact Pro camera system.
                      </p>
                  </div>

                  <div className="flex-1 flex justify-center flex-col text-below-2 md:pl-24 pl-0">
                      <p className="hiw-bigtext">5x optical <br /> zoom</p>
                      <p className="hiw-text">with the 120 mm lens</p>
                  </div>
              </div>
              <div className='w-full flex justify-start text-below-3 md:px-28 px-2'>
                  <p className='hiw-text md:w-4/12 w-full'>Mobile {''}
                      <span className='text-white'> games will look and feel so immersive</span>
                      with incredibly detailed environments and characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                  </p>
              </div>

        </div>
    </section>
  )
}

export default ZoomFeature