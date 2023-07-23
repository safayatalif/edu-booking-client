import React, { useContext, useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { getCollagesByEmail } from '../../api/candidates';
import { AuthContext } from '../../providers/AuthProvider';
import Heading from '../../components/Shared/Heading/Heading';
import Loader from '../../components/Shared/Loader';
import { TbFidgetSpinner } from 'react-icons/tb';
import { addReview } from '../../api/reviews';
import { toast } from 'react-hot-toast';

const MyCollages = () => {
    const [myCollages, setMyCollages] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewLoading, setReviewLoading] = useState(false)



    useEffect(() => {
        getCollagesByEmail(user?.email)
            .then(data => {
                setMyCollages(data);
                setLoading(false)
            })
    }, [])

    const handelSubmit = (event) => {
        event.preventDefault()
        const rating = event.target.rating.value;
        const comment = event.target.comment.value;
        const collageName = event.target.collageName.value;

        const review = {
            rating,
            comment,
            collageName
        }
        addReview(review)
            .then(data => {
                toast.success('Review Added!');
                event.target.reset();
                setReviewLoading(false)

            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className='py-12'>
                <Heading
                    title='My Collages'
                    subtitle='Discover top colleges with exciting offerings for a brighter future. Explore facilities, events, and sports opportunities.'
                    center={true}
                />
            </div>
            {
                loading ? <Loader></Loader> :
                    <div className="grid gap-4">
                        {myCollages.map((myCollage, index) => (
                            <div key={index} className="bg-white rounded shadow shadow-rose-500 p-4">
                                <div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
                                    <div className='md:border-r-2 mr-4'>
                                        <h3 className="text-xl font-semibold mb-2">{myCollage.collageData.collegeName}</h3>
                                        <p className="text-gray-600 mb-4">{myCollage.collageData.collegeDescription}</p>
                                        <img className='h-24 w-1/2 rounded-md' src={myCollage.collageData.collegeImage} alt="" />
                                        <div className="flex items-center">
                                            <span className="mr-2">Admission Date:</span>
                                            <div className="flex">
                                                {myCollage.collageData.admissionDate}
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handelSubmit}>
                                        <h3 className="text-xl font-semibold mb-2">Add a Review :</h3>
                                        <input className='hidden' name='collageName' defaultValue={myCollage.collageData.collegeName} type="text" />
                                        <div>
                                            <label htmlFor="rating" className="block font-medium py-2">Rating:</label>
                                            <select id="rating" name="rating" className="border border-gray-400 p-2 w-full sm:w-2/3 lg:w-1/2 rounded-md" required>
                                                <option value="0">Select Rating</option>
                                                <option value="1">Poor</option>
                                                <option value="2">Fair</option>
                                                <option value="3">Good</option>
                                                <option value="4">Very Good</option>
                                                <option value="5">Excellent</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <label className='font-medium py-2' htmlFor="comment">Comment:</label>
                                            <textarea
                                                id="comment"
                                                name="comment"
                                                className="p-2 rounded border w-full"
                                                rows={2}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type='submit'
                                                onClick={() => setReviewLoading(true)}
                                                className='bg-rose-500 w-full rounded-md py-3 text-white'
                                            >
                                                {reviewLoading ? (
                                                    <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                                ) : (
                                                    'Submit'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </Container>
    );
};

export default MyCollages;