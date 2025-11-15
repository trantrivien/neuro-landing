import React from 'react'


interface SectionHeaderProps {
    title: string;
    section?: string;
}
function SectionHeader({ title, section }: Readonly<SectionHeaderProps>) {
    return (
        <div className='md:px-16 px-4 space-y-6 text-center'>
            <span className='typography-body1 !text-[#3D99F5]'>
                {section}
            </span>
            <h2 className="md:typography-h2 typography-h3 text-gradient-01 md:mt-6 mt-3">
                {title}
            </h2>
        </div>
    )
}

export default SectionHeader