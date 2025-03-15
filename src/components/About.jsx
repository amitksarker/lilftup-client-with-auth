import React from 'react';

const About = () => {
    return (
        <div className="m-6 px-4 md:px-10 lg:px-20">
    <h1 className="font-bold text-4xl text-center mb-8 text-gray-800">About Us</h1>

    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-white shadow-lg rounded-xl p-6 md:p-10">
        {/* Image Section */}
        <img 
            className="w-full md:w-[400px] lg:w-[450px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105" 
            src="https://i.ibb.co/C5tfQbr7/christian-dubovan-Y-x747-Yshlw-unsplash.jpg" 
            alt="Travel Memories"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
            <h1 className="font-black text-2xl text-gray-900 mb-3">Share Memories</h1>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
                Tailor-made travel plans crafted to match your preferences and interests. <br />
                Discover insights, trends, and strategies to elevate your travel business and stay ahead in this dynamic industry.
            </p>

            <p className="font-medium text-lg text-gray-700 leading-relaxed mt-4">
                Make an account and login to stay updated in the travelers' platform. <br />
                Create an event to gather your fellow travelers and connect with them.
            </p>
        </div>
    </div>
</div>

    );
};

export default About;