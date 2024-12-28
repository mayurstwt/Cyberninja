import React from 'react'

const Companies = () => {

    const logos = [
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399655/10.svg', alt: 'Company 1' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/9.svg', alt: 'Company 2' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/2.svg', alt: 'Company 3' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/1.svg', alt: 'Company 4' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/4.svg', alt: 'Company 5' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/7.svg', alt: 'Company 6' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/5.svg', alt: 'Company 7' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/8.svg', alt: 'Company 8' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/6.svg', alt: 'Company 9' },
        { src: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/3.svg', alt: 'Company 10' },

    ];


    return (
        <section className="py-10">
            <div className="container mx-auto px-2 md:px-0">
                <p className='text-gray-400 text-center mb-10'>Trusted by the best strategic teams in the world</p>
                <div className="grid grid-cols-2 md:grid-cols-5  gap-6">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img src={logo.src} alt={logo.alt} className="bg-white rounded-xl w-full p-2 h-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Companies