import React from 'react';
import Container from '../../components/Shared/Container';
import CollagesSection from './CollagesSection';
import CollegeImageGallery from './CollegeImageGallery';
import ResearchPaperSection from './ResearchPaperSection';
import ReviewSection from './ReviewSection';

const Home = () => {
    return (
        <Container>
            <CollagesSection></CollagesSection>
            <CollegeImageGallery></CollegeImageGallery>
            <ResearchPaperSection></ResearchPaperSection>
            <ReviewSection></ReviewSection>
        </Container>
    );
};

export default Home;