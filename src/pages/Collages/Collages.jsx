import React, { useEffect, useState } from 'react';
import Heading from '../../components/Shared/Heading/Heading';
import { getAllCollages } from '../../api/collages';
import Card from './Card';
import Container from '../../components/Shared/Container';
import Loader from '../../components/Shared/Loader';

const Collages = () => {
    const [collages, setCollages] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getAllCollages()
            .then(data => {
                setCollages(data)
                setLoading(false)
            })
    }, [])


    return (
        <Container>
            <div>
                <div className='pt-12'>
                    <Heading
                        title='All Collages'
                        subtitle='Discover top colleges with exciting offerings for a brighter future. Explore facilities, events, and sports opportunities.'
                        center={true}
                    />
                </div>
                {
                    loading ? <Loader></Loader> :
                        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8'>
                            {collages.map((collage, index) => (
                                <Card key={index} collage={collage} />
                            ))}
                        </div>
                }

            </div>
        </Container>
    );
};

export default Collages;