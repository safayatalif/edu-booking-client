import React from 'react';
import Container from '../../components/Shared/Container';
import CollagesSection from './CollagesSection';
import CollegeImageGallery from './CollegeImageGallery';

const Home = () => {
    return (
        <Container>
            <CollagesSection></CollagesSection>
            <CollegeImageGallery></CollegeImageGallery>
        </Container>
    );
};

export default Home;