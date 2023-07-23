import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Shared/Container';
import Header from './Header';
import CollegeEvents from './CollegeEvents';
import CollegeSports from './CollegeSports';


const CollageDetails = () => {
    const collageData = useLoaderData();
    const { admissionProcess, researchWorks , _id} = collageData


    return (
        <Container>
            <div className='max-w-screen-lg mx-auto '>
                <div className='flex flex-col gap-6'>
                    <Header collageData={collageData} />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                        <div className='p-4'>
                            <h3 className='font-bold text-xl my-4'>Admission Process :</h3>
                            <p>{admissionProcess}</p>
                        </div>
                        <div className='p-4'>
                            <h3 className='font-bold text-xl my-4'>Research Works:</h3>
                            <p>{researchWorks}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='p-4'>
                            <h3 className='font-bold text-xl my-4'>College Events:</h3>
                            <CollegeEvents events={collageData.collegeEvents} />
                        </div>
                        <div className='p-4'>
                            <h3 className='font-bold text-xl my-4'>College Sports:</h3>
                            <CollegeSports sports={collageData.collegeSports} />
                        </div>
                    </div>
                    <Link
                        to={`/admission/${_id}`}
                        className="block bg-rose-500 text-white text-center py-2 px-4 rounded hover:bg-rose-600"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default CollageDetails;