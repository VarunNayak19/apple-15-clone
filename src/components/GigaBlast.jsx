import React from 'react'
import { gigablastImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GigaBlast = () => {
    useGSAP(() => {
        gsap.from("#gigabit", {

            scrollTrigger: {
                start: '20% bottom',
                trigger: '#gigabit',
                toggleActions: 'restart reverse restart reverse',
            },
            y:1,
            opacity: 0,
        });
        gsap.from("#text-1", {

            scrollTrigger: {
                start: '10% bottom',
                trigger: '#text-1',
                toggleActions: 'restart reverse restart reverse',
            },
            y:40,
            opacity: 0,
        });
        gsap.from("#text-2", {

            scrollTrigger: {
                start: '10% bottom',
                trigger: '#text-2',
                toggleActions: 'restart reverse restart reverse',
            },
            y:40,
            opacity: 0,
        });
    },[])
  return (
    <section className='sm:pb-32 pb-20 sm:px-10 px-5 screen-max-width'>
          <h2 className='text-4xl md:text-7xl font-semibold sm:pb-32 pb-20 text-left pl-16'>
            Gigablast
              <br />
            your gigabits.
          </h2>
          <div className='w-full'>
            <img src={gigablastImg} alt="giga" className='w-full' id="gigabit" />
          </div>
          <div id="text-1" className='hiw-text-container justify-center my-12 md:px-28 px-2 text-below'>
            
              <div className='flex justify-center flex-col w-full md:w-5/12'>
                  <p className='hiw-text '>iPhone 15 Pro is the first iPhone to support USB 3,4 for a  {''}
                      <span className='text-white'>huge leap in data transfer speeds</span>  and faster pro workflows than ever before.
                  </p>
              </div>

              <div className="flex-1 flex justify-center flex-col  pl-0">
                  <p className="hiw-text">Up to</p>
                  <p className="hiw-bigtext">20x faster</p>
                  <p className="hiw-text">file transfers</p>
              </div>
          </div>
          <div id="text-2" className='hiw-text-container justify-center my-12 md:px-28 px-2 text-below'>
              <div className='flex justify-center flex-col w-full md:w-5/12'>
                  <p className='hiw-text '>The new USB‑C connector lets you{''}
                      <span className='text-white'> charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro</span>. Bye‑bye, cable clutter.
                  </p>
              </div>

              <div className='flex flex-1 justify-center flex-col w-full md:w-4/12  pl-0'>
                  <p className='hiw-text '>And with all‑new Wi‑Fi 6E5 you'll get{' '}
                      <span className='text-white'>two times faster wireless speeds</span>. So you can upload, download, and transfer files in a flash.
                  </p>
              </div>
          </div>
    </section>
  )
}

export default GigaBlast