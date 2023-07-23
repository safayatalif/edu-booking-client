import React, { useContext, useState } from 'react';
import Container from '../../components/Shared/Container';
import Heading from '../../components/Shared/Heading/Heading';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { addCandidate } from '../../api/candidates';
import { TbFidgetSpinner } from 'react-icons/tb';
import { AuthContext } from '../../providers/AuthProvider';

const AdmissionForm = () => {

    const collageData = useLoaderData();
    const [loading, setLoading] = useState(null);
    const { user } = useContext(AuthContext)

    const { collegeName, _id, } = collageData;


    const handelSubmit = (event) => {
        event.preventDefault()
        const candidateName = event.target.candidateName.value
        const candidateEmail = event.target.candidateEmail.value
        const subject = event.target.subject.value
        const candidatePhone = event.target.candidatePhone.value
        const address = event.target.address.value
        const dateOfBirth = event.target.dateOfBirth.value
        const candidateImage = event.target.candidateImage.value
        const candidateInfo = {
            candidateName,
            candidateEmail,
            subject,
            candidatePhone,
            address,
            dateOfBirth,
            candidateImage,
            collageData
        }

        addCandidate(candidateInfo)
            .then(data => {
                toast.success('candidate Info Added!');
                event.target.reset();
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="container mx-auto mt-8 p-4">
                <div className='pb-12'>
                    <Heading
                        title='Candidate Registration Form'
                        subtitle='Apply for college admission and provide your details for a chance to join our esteemed institution.'
                        center={true}
                    />
                </div>
                <form onSubmit={handelSubmit} className="space-y-4 max-w-2xl mx-auto">
                    <div>
                        <label htmlFor="candidateName" className="block font-medium">Candidate Name:</label>
                        <input readOnly defaultValue={user?.displayName} type="text" id="candidateName" name="candidateName" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block font-medium">Subject:</label>
                        <input placeholder='xyz' type="text" id="subject" name="subject" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidateEmail" className="block font-medium">Candidate Email:</label>
                        <input readOnly defaultValue={user?.email} type="email" id="candidateEmail" name="candidateEmail" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidatePhone" className="block font-medium">Candidate Phone number:</label>
                        <input placeholder='+8801000122111' type="tel" id="candidatePhone" name="candidatePhone" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="address" className="block font-medium">Address:</label>
                        <input placeholder='example, Dhaka' type="text" id="address" name="address" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block font-medium">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidateImage" className="block font-medium">Upload Candidate Image:</label>
                        <input readOnly defaultValue={user?.photoURL} type="url" id="candidateImage" name="candidateImage" accept="image/*" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <button
                        onClick={() => setLoading(true)}
                        type='submit'
                        className='bg-rose-500 w-full rounded-md py-3 text-white'
                    >
                        {loading ? (
                            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default AdmissionForm;
