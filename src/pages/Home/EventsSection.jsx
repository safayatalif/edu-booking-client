import React from 'react';
import Heading from '../../components/Shared/Heading/Heading';

const EventsSection = () => {
    // Sample data of college events (Replace with actual data)
    const collegeEvents = [
        {
            title: 'Guest Lecture on AI and Machine Learning',
            date: 'August 15, 2023',
            description: 'Join us for an insightful lecture on the latest advancements in AI and ML.',
            registrationLink: 'https://example.com/event-registration',
        },
        {
            title: 'Annual Sports Meet 2023',
            date: 'September 23-25, 2023',
            description: 'Participate in exciting sports competitions and showcase your athletic talents!',
            registrationLink: 'https://example.com/sports-meet-registration',
        },
        // Add more events as needed
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4"></h2>
            <div className='py-12'>
                <Heading
                    title='Upcoming Events'
                    subtitle='Stay Informed: Join Exciting College Events - Discover upcoming workshops, seminars, and activities for your engagement.'
                    center={true}
                />
            </div>
            <div>
                {collegeEvents.map((event, index) => (
                    <div key={index} className="bg-white rounded shadow p-4 mb-4">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.date}</p>
                        <p className="text-gray-800 mb-4">{event.description}</p>
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-rose-500 text-white text-center py-2 px-4 rounded hover:bg-rose-600"
                        >
                            Register Now
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
