import React from 'react';
import Container from '../../components/Shared/Container';
import Heading from '../../components/Shared/Heading/Heading';

const AdmissionForm = () => {
    return (
        <Container>
            <div className="container mx-auto mt-8 p-4">
                <div className='py-12'>
                    <Heading
                        title='Candidate Registration Form'
                        subtitle='Apply for college admission and provide your details for a chance to join our esteemed institution.'
                        center={true}
                    />
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="candidateName" className="block font-medium">Candidate Name:</label>
                        <input type="text" id="candidateName" name="candidateName" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block font-medium">Subject:</label>
                        <input type="text" id="subject" name="subject" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidateEmail" className="block font-medium">Candidate Email:</label>
                        <input type="email" id="candidateEmail" name="candidateEmail" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidatePhone" className="block font-medium">Candidate Phone number:</label>
                        <input type="tel" id="candidatePhone" name="candidatePhone" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="address" className="block font-medium">Address:</label>
                        <input type="text" id="address" name="address" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block font-medium">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="candidateImage" className="block font-medium">Upload Candidate Image:</label>
                        <input type="file" id="candidateImage" name="candidateImage" accept="image/*" className="border border-gray-400 p-2 w-full rounded-md" required />
                    </div>
                    <button type="submit" className="block bg-rose-500 text-white text-center py-2 px-4 rounded hover:bg-rose-600">Submit</button>
                </form>
            </div>
        </Container>
    );
};

export default AdmissionForm;
