import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from './ServiceCard'
import { SERVICES } from '@/constants'

function Services() {
    return (
        <div id='features' className='my-[100px]'>
            <SectionHeader title='Modular. Secure. Capital-Efficient' section='SERVICES' />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-fit mx-auto mt-16'>
                {SERVICES.map((service, index) => (
                    <ServiceCard key={index} data={service} />
                ))}
            </div>
        </div>
    )
}

export default Services
