import React from 'react'

interface PowerLogicProps {
    title: string;
    description: string;
}
function PowerLogic({ title, description }: Readonly<PowerLogicProps>) {
    return (
        <div className=''>
            <div className='flex md:gap-5 gap-2'>
                <div className='min-w-[21px] w-[21px] h-[21px] text-gradient-03 rounded-full mt-1'></div>
                <h5 className='md:typography-h5 typography-h6 text-white'>{title}</h5>
            </div>
            <p className='md:typography-body1 typography-body2 text-[#C4C4C4] md:mt-4 mt-2 !font-normal'>{description}</p>
        </div>
    )
}

export default PowerLogic