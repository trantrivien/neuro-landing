import React from 'react'


interface SectionHeaderProps {
    title: string;
    section?: string;
}
function SectionHeader({ title, section }: Readonly<SectionHeaderProps>) {
    return (
        <div className='px-16 space-y-6 text-center'>
            <span className='typography-body1 !text-[#3D99F5]'>
                {section}
            </span>
            <h2 className="typography-h2 text-gradient-01 mt-6">
                {title}
            </h2>
        </div>
    )
}

export default SectionHeader