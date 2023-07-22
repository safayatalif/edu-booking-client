import React from 'react';
import Heading from '../../components/Shared/Heading/Heading';

const CollegeImageGallery = () => {
    // Sample data of college graduate group pictures (Replace with actual data)
    const collegeGraduates = [
        {
            imageUrl: 'https://img.freepik.com/free-photo/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduation-hats-smiling-camera_496169-1297.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2023',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2022',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-photo/asian-students-graduate-being-congratulated-by-their-parent-graduation-ceremony_1150-3183.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2021',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-photo/theyve-reached-end-their-academic-years-shot-group-university-students-throwing-their-hats-air-graduation-day_590464-9807.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2020',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-photo/graduating-students-throwing-graduation-caps-air_53876-158208.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2019',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-photo/portrait-multiracial-graduates-holding-diploma-doing-selfie-phone-lifestule_115086-212.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais',
            caption: 'College Graduation 2018',
        },
        // Add more images and captions as needed
    ];

    return (
        <section className='mt-12'>
            <div className='py-12'>
                <Heading
                    title='College Graduate Image Gallery'
                    subtitle='Unveiling the Journey: Explore Our College Graduates Group Pictures A captivating visual showcase of our successful college graduates memorable moments, celebrating their achievements and inspiring the future generations'
                    center={false}
                />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {collegeGraduates.map((graduate, index) => (
                    <div key={index} className="relative hover:scale-105 duration-500 cursor-pointer">
                        <img src={graduate.imageUrl} alt={`College Graduates ${index + 1}`} className="w-full rounded" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white text-center font-semibold">{graduate.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollegeImageGallery;
