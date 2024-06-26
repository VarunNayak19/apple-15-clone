import React from 'react'
import { CameraVerticalImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CameraDescription = () => {
    useGSAP(() => {
        gsap.from('.cam_fadeIn',{
            scrollTrigger:{
                trigger:'.cam_fadeIn',
                start: '20% bottom',
                toggleActions: 'restart reverse restart reverse',
            },
            y:10,
            opacity: 0,
            duration: 1,
            stagger:0.5,
            ease: 'power2.inOut'
        })
    },[])
  return (
    <section className='common-padding'>
        <div className='flex md:flex-row flex-col justify-center items-center gap-14 md:pl-[100px]'>
            <img src={CameraVerticalImg} alt="" width={275} height={561} />
            <div className='flex flex-col justify-start text-left items-start gap-4'>
                  <div className='flex-1 flex justify-center flex-col cam_fadeIn'>
                      <p className='hiw-text '>The 48MP Main camera is more <br /> advanced than ever, capturing <br /> super‑high‑resolution photos with <br /> a {''}
                          <span className='text-white'>new level of detail and colour.</span>
                      </p>
                  </div>
                  <div className='flex-1 flex justify-center flex-col cam_fadeIn'>
                      <p className='hiw-text '>You’ll see the improvements in <br /> your portraits. And now you no <br /> longer have to switch to Portrait <br /> mode. If your subject is a person,<br /> dog or cat, iPhone automatically <br /> captures depth information. So<br />  you can choose to instantly {''}
                          <span className='text-white'> see <br /> your photo as a portrait</span>, with an <br /> artful blur effect. Or later in the <br /> Photos app.
                      </p>
                  </div>
            </div>
        </div>
        <div className=' w-3/4 h-[1px] bg-gray-100 m-auto my-48'></div>
        <div className='w-full m-auto flex justify-center items-center'>
              <h2 className='text-3xl md:text-4xl font-semibold text-center'>
                Shoot magical spatial videos,
                <br />
                then relive them on Apple Vision Pro
              </h2>
        </div>
    </section>
  )
}

export default CameraDescription