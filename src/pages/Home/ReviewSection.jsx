import React, { useEffect, useState } from 'react';
import Heading from '../../components/Shared/Heading/Heading';
import { getAllReview } from '../../api/reviews';

const ReviewSection = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        getAllReview()
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [])


    return (
        <section className="py-12">
            <div className='py-12'>
                <Heading
                    title='College Reviews'
                    subtitle='Discover College Experiences: Read Reviews and Ratings from Students - A glimpse into our community s opinions and insights.'
                    center={false}
                />
            </div>
            <div className="grid gap-4">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded shadow p-4">
                        <h3 className="text-xl font-semibold mb-2">{review.collageName}</h3>
                        <p className="text-gray-600 mb-4">{review.comment}</p>
                        <div className="flex items-center">
                            <span className="mr-2">Rating: {review.rating}</span>
                            <div className="flex">
                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-6 h-6 fill-current text-yellow-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1a1 1 0 01.895.553l1.938 3.876 4.342.63a1 1 0 01.555 1.705l-3.136 3.045.74 4.324a1 1 0 01-1.451 1.055L10 13.688l-3.894 2.047a1 1 0 01-1.45-1.056l.74-4.324L1.616 6.764a1 1 0 01.554-1.705l4.342-.63L9.105 1.553A1 1 0 0110 1zm-.218 7.742a1 1 0 01.62.28l2.28 2.215-.548 3.191a1 1 0 01-1.447.945L10 14.347l-2.306 1.213a1 1 0 01-1.447-.945l-.548-3.19 2.28-2.215a1 1 0 01.62-.28zM9 11a1 1 0 01.553.166l1 1 .447-2.6a1 1 0 01.277-.505l1.61-1.567-2.223-.323a1 1 0 01-.748-.55L9 5.13V11zm-1 0V5.13l-1.444 2.213a1 1 0 01-.747.55L4.31 7.273l1.61 1.567a1 1 0 01.277.504l.447 2.6 1-1A1 1 0 019 11zm-.776 3.034l.548 3.19a1 1 0 01-.445 1.192 1 1 0 01-1.192-.446l-1.083-2.1-2.172.985a1 1 0 01-1.038-1.718l2.5-2.434-1.05-1.024a1 1 0 011.447-1.454l1.764 1.717 1.764-1.716a1 1 0 111.448 1.454l-1.05 1.024 2.5 2.433a1 1 0 01-.352 1.638l-2.172-.985-1.083 2.1a1 1 0 01-.747.553 1 1 0 01-.445-.11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                                {review.rating % 1 !== 0 && ((
                                    <svg
                                        className="w-6 h-6 fill-current text-yellow-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1a1 1 0 01.895.553l1.938 3.876 4.342.63a1 1 0 01.555 1.705l-3.136 3.045.74 4.324a1 1 0 01-1.451 1.055L10 13.688l-3.894 2.047a1 1 0 01-1.45-1.056l.74-4.324L1.616 6.764a1 1 0 01.554-1.705l4.342-.63L9.105 1.553A1 1 0 0110 1zm-.218 7.742a1 1 0 01.62.28l2.28 2.215-.548 3.191a1 1 0 01-1.447.945L10 14.347l-2.306 1.213a1 1 0 01-1.447-.945l-.548-3.19 2.28-2.215a1 1 0 01.62-.28zM9 11a1 1 0 01.553.166l1 1 .447-2.6a1 1 0 01.277-.505l1.61-1.567-2.223-.323a1 1 0 01-.748-.55L9 5.13V11zm-1 0V5.13l-1.444 2.213a1 1 0 01-.747.55L4.31 7.273l1.61 1.567a1 1 0 01.277.504l.447 2.6 1-1A1 1 0 019 11zm-.776 3.034l.548 3.19a1 1 0 01-.445 1.192 1 1 0 01-1.192-.446l-1.083-2.1-2.172.985a1 1 0 01-1.038-1.718l2.5-2.434-1.05-1.024a1 1 0 011.447-1.454l1.764 1.717 1.764-1.716a1 1 0 111.448 1.454l-1.05 1.024 2.5 2.433a1 1 0 01-.352 1.638l-2.172-.985-1.083 2.1a1 1 0 01-.747.553 1 1 0 01-.445-.11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
