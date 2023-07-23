import React, { useContext } from 'react';
import Container from '../../components/Shared/Container';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div className="container mx-auto mt-8 p-4">
                <h2 className="text-2xl font-semibold mb-4">Profile Page</h2>
                <div className="flex items-center mb-4">
                    <img src={user?.photoURL} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">{user?.displayName}</h3>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Profile;