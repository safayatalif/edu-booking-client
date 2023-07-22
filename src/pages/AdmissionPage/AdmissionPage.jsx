import React, { useEffect, useState } from 'react';
import Heading from '../../components/Shared/Heading/Heading';
import { getAllCollages } from '../../api/collages';
import Loader from '../../components/Shared/Loader';
import Container from '../../components/Shared/Container';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {

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
            <div className='py-12'>
                <Heading
                    title='Admission Now'
                    subtitle='Stay Informed: Join Exciting College Events - Discover upcoming workshops, seminars, and activities for your engagement.'
                    center={true}
                />
            </div>
            {loading ? <Loader></Loader> :
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {collages.map((collage, index) => (
                        <div key={index} className="bg-white rounded shadow p-4 mb-4">
                            <h3 className="text-xl font-semibold">{collage.collegeName}</h3>
                            <p className="text-gray-600 mb-2">{collage.collegeDescription}</p>
                            <p className="text-gray-800 mb-4">{collage.admissionDate}</p>
                            <Link
                                to={`${collage._id}`}
                                className="block bg-rose-500 text-white text-center py-2 px-4 rounded hover:bg-rose-600"
                            >
                                Register Now
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </Container>
    );
};

export default AdmissionPage;
