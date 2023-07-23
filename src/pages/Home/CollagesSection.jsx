import React, { useEffect, useState } from 'react';
import {  getCollageByText } from '../../api/collages';
import Heading from '../../components/Shared/Heading/Heading';
import CardHome from './CardHome';
import Loader from '../../components/Shared/Loader';
import { BiSearch } from 'react-icons/bi';

const CollagesSection = () => {
    const [collages, setCollages] = useState([]);
    const [searchText, setSearchText] = useState("l");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCollageByText(searchText)
            .then(data => {
                const sliceData = data?.slice(0, 3)
                setCollages(sliceData)
                setLoading(false)
            })
    }, [searchText])
    return (
        <div>
            <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 border-[1px] rounded-full p-2 '>
                <input onChange={(e) => setSearchText(e.target.value)} className='rounded-xl p-2 w-full' type="text" placeholder='Search Collage' />
                <div className='p-2 bg-rose-500 rounded-full text-white'>
                    <BiSearch size={18} />
                </div>
            </div>
            <div className='pt-12'>
                <Heading
                    title='Some Collages'
                    subtitle='Discover top colleges with exciting offerings for a brighter future. Explore facilities, events, and sports opportunities.'
                    center={false}
                />
            </div>

            {
                loading ? <Loader></Loader> :
                    <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8'>
                        {collages.map((collage, index) => (
                            <CardHome key={index} collage={collage} />
                        ))}
                    </div>
            }

        </div>
    );
};

export default CollagesSection;