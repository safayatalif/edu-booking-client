import React from 'react';
import Heading from '../../components/Shared/Heading/Heading';

const ResearchPaperSection = () => {
    // Sample data of recommended research papers (Replace with actual data)
    const recommendedPapers = [
        {
            title: 'Advancements in Artificial Intelligence',
            authors: 'John Doe, Jane Smith',
            link: 'https://example.com/paper1',
        },
        {
            title: 'Sustainable Energy Solutions for the Future',
            authors: 'Michael Johnson, Emily Brown',
            link: 'https://example.com/paper2',
        },
        {
            title: 'The Impact of Climate Change on Biodiversity',
            authors: 'Sarah Adams, Robert Lee',
            link: 'https://example.com/paper3',
        },
        // Add more research papers as needed
    ];

    return (
        <section className="py-12">
            <div className='py-12'>
                <Heading
                    title='Recommended Research Papers'
                    subtitle='Explore Research Excellence: Discover Recommended Papers - A curated collection of college students impactful research works.'
                    center={false}
                />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recommendedPapers.map((paper, index) => (
                    <div key={index} className="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                        <p className="text-gray-600 mb-4">{paper.authors}</p>
                        <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-rose-500 text-white text-center py-2 px-4 rounded hover:bg-rose-600"
                        >
                            Read Paper
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchPaperSection;
