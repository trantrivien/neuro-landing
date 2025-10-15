import React from 'react'

function About() {
    return (
        <div id='about' className='py-[100px] container flex flex-col justify-center items-center mt-[132px]'>
            <div className='max-w-[647px] space-y-16'>
                <h2 className="typography-h2 text-gradient-01 mt-6" >
                    Built for the Future of Onchain Capital Flow
                </h2>
                <p className="typography-body text-[#C4C4C4] text-center">
                    NeroVault is engineered for DeFi strategists, stablecoin managers, and treasury operators who demand more than just deposits. With non-custodial logic, async redemption, and smart fee routing,
                    NeroVault transforms passive capital into an optimized asset flow across chains and strategies.
                </p>
            </div>

            <div className=' grid grid-cols-4 space-x-14 mt-24'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <span className='typography-h4 text-white'>20+</span>
                    <span className='typography-body1 text-[#C4C4C4] text-center'>Strategies Supported</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <span className='typography-h4 text-white'>0.5%</span>
                    <span className='typography-body1 text-[#C4C4C4] text-center'>Base Redemption Fee<br />
                        (xUSD NAV)</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <span className='typography-h4 text-white'>100,000+</span>
                    <span className='typography-body1 text-[#C4C4C4] text-center'>Redemptions Processed</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <span className='typography-h4 text-white'>200+</span>
                    <span className='typography-body1 text-[#C4C4C4] text-center'>Merchants Accept</span>
                </div>
            </div>

        </div>

    )
}

export default About