import React, { useEffect, useState } from 'react';
import { getAllCollages } from '../../api/collages';
import Heading from '../../components/Shared/Heading/Heading';
import Card from '../Collages/Card';
import CardHome from './CardHome';

const CollagesSection = () => {
    const [collages, setCollages] = useState([]);

    useEffect(() => {
        getAllCollages()
            .then(data => {
                const sliceData = data.slice(0, 3)
                setCollages(sliceData)
            })
    }, [])
    return (
        <div>
            <div className='pt-12'>
                <Heading
                    title='Some Collages'
                    subtitle='Discover top colleges with exciting offerings for a brighter future. Explore facilities, events, and sports opportunities.'
                    center={false}
                />
            </div>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8'>
                {collages.map((collage, index) => (
                    <CardHome key={index} collage={collage} />
                ))}
            </div>

        </div>
    );
};

export default CollagesSection;