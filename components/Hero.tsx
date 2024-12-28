import React from 'react'
import HeroVideoDialog from './ui/hero-video-dialog'
import { AnimatedShinyTextDemo } from './Animated-text-hero'

const Hero = () => {
    return (
        <div className='flex items-center flex-col text-white pb-48 gap-16'>
            <div className='text-center pt-24'>
                <AnimatedShinyTextDemo />
                <h1 className='text-4xl font-bold md:text-6xl leading-normal bg-gradient-to-b from-gray-500 to-white bg-clip-text text-transparent'>
                    Unlock the Secrets of Cybersecurity <br /> and Ethical Hacking Today
                </h1>
                <p className='text-muted pt-6'>Explore the world of cybersecurity, coding, and ethical hacking. <br /> Join us to learn, share, and innovate in tech!</p>
            </div>
            <HeroVideoDialog className="container mx-auto px-2 md:px-0" videoSrc={"https://res.cloudinary.com/damr9jzpb/video/upload/v1735386660/852292-hd_1152_720_25fps_swt8or.mp4"} thumbnailSrc={"https://res.cloudinary.com/damr9jzpb/image/upload/v1735386810/Screenshot_from_2024-12-28_17-22-30_vzlflc.png"} />
        </div>
    )
}

export default Hero