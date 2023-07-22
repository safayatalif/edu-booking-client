import React from 'react'
import Heading from '../../components/Shared/Heading/Heading'

const Header = ({ collageData }) => {

    return (
        <>
            <Heading title={collageData.collegeName} subtitle={collageData.collegeDescription} />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src={collageData.collegeImage}
                    alt='header image'
                />
            </div>
        </>
    )
}

export default Header
