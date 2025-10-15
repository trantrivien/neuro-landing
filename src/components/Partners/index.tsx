import React from 'react'
import ScrollingLogos from './ScrollingLogos';

const logos = [
    { src: "/assets/partnersLogo/Logo01.png", alt: "Binace" },
    { src: "/assets/partnersLogo/Logo02.png", alt: "Google" },
    { src: "/assets/partnersLogo/Logo03.png", alt: "FB" },
    { src: "/assets/partnersLogo/Logo04.png", alt: "Google" },
    { src: "/assets/partnersLogo/Logo05.png", alt: "Google" },
    { src: "/assets/partnersLogo/Logo06.png", alt: "Google" },
];

function Partners() {
    return (
        <div className='container pb-[100px] pt-9'>
            <h1 className='typography-h5 text-gradient-01 text-center'>Partnered with worldwide leading companies</h1>
            <div className='mt-16'>
                <ScrollingLogos
                    logos={logos}
                    duration={24}   // speed (seconds per loop)
                    gap={87}        // spacing between logos (px)
                    pauseOnHover    // hover to pause
                    className="mx-auto max-w-screen-2xl"
                />
            </div>
        </div>
    )
}

export default Partners