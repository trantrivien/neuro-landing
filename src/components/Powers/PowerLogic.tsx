import React from 'react'

interface PowerLogicProps {
    title: string;
    description: string;
}
function PowerLogic({ title, description }: Readonly<PowerLogicProps>) {
    return (
        <div className=''>
            <div className='flex gap-5'>
                <div className='min-w-[21px] w-[21px] h-[21px] text-gradient-03 rounded-full mt-1'></div>
                <h5 className='typography-h5 text-white'>{title}</h5>
            </div>
            <p className='typography-body1 text-[#C4C4C4] mt-4 !font-normal'>{description}</p>
        </div>
    )
}

export default PowerLogic