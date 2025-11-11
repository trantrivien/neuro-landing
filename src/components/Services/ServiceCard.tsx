import React from 'react'
import Image from 'next/image'
import type { ServiceContent } from '@/constants'

interface ServiceCardProps {
    data: ServiceContent
}

function ServiceCard({ data }: Readonly<ServiceCardProps>) {
    return (
        <div className='service-card w-[424px]'>
            <Image
                src={"/service-card-bg.svg"}
                alt="Service Card Background"
                width={424}
                height={222}
            />
            <div className='px-8 pb-8'>
                <h3 className='typography-h3 text-gradient-01'>{data.title}</h3>
                <span className='typography-body1 text-white block  mt-10 mb-6'>{data.description}</span>
                <p className='typography-body1 text-[#C4C4C4] !font-normal'>{data.content}</p>

            </div>
        </div>
    )
}

export default ServiceCard
