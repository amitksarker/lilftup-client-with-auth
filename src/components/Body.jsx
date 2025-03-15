import React, { useState } from 'react';
import Banner from './Banner';
import HowToWork from './HowToWork';
import { Link, useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';
import About from './About';

const Body = () => {
    const loadedCampaigns = useLoaderData();
  
    
    // Get current date
    const today = new Date();

    // Filter running campaigns (deadline has not passed)
    const runningCampaigns = loadedCampaigns.filter(campaign => new Date(campaign.deadline) >= today);

    // State to track how many campaigns to show
    const [visibleCount, setVisibleCount] = useState(6);

    // Show more campaigns when button is clicked
    const showMore = () => {
        setVisibleCount(prev => prev + 6); // Increase by 6 each time
    };

    return (
        <div>
            <Banner />
            
            {/* Campaigns Section */}
            <div>
                <h1 className='font-bold text-2xl text-center my-4'>
                Running Campaign : {runningCampaigns.length}
                </h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-4'>
                    {runningCampaigns.slice(0, visibleCount).map(campaign => (
                        <CampaignCard key={campaign._id} campaign={campaign} />
                    ))}
                </div>

                {/* Show More Button */}
                {visibleCount < runningCampaigns.length && (
                    <div className="flex justify-center mt-4">
                        <Link to='/allcampaign'>
                                <button 
                                    className="btn btn-outline btn-primary"
                                    onClick={showMore}>
                                See More
                                </button>
                        </Link>
                    </div>
                )}
            </div>

                <About></About>
                <HowToWork />
        </div>
    );
};

export default Body;
