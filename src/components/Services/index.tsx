import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: 'AI-Powered Yield Management',
        description: 'Optimize capital like a pro',
        content: 'NeroVault integrates AI logic to help operators make informed deployment decisions — identifying idle capital, strategy risk signals, and NAV impact',
    },
    {
        title: 'Intelligent Async Redemptions',
        description: 'Predict & smooth redemptions',
        content: 'Async redemption flows are enhanced with predictive modeling: AI monitors vault liquidity and user behavior to optimize when/how redemptions are fulfilled',
    },
    {
        title: 'Adaptive Fee Tuning',
        description: 'Fees that adjust to behavior',
        content: 'FeeManager modules can be extended with AI to adjust redemption or deposit fees based on market conditions, liquidity stress, and user patterns.',
    },
]

function Services() {
    return (
        <div id='features' className='my-[100px]'>
            <SectionHeader title='Modular. Secure. Capital-Efficient' section='SERVICES' />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-fit mx-auto mt-16'>
                {services.map((service, index) => (
                    <ServiceCard key={index} data={service} />
                ))}
            </div>
        </div>
    )
}

export default Services