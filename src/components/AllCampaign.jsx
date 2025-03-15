import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
    const allcampaigndata = useLoaderData();
    return (
        <div>
           <h1 className='font-bold text-2xl text-center'>All Campaign is here {allcampaigndata.length} </h1> 
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
  {allcampaigndata.map(allcampaign => (
    <div 
      key={allcampaign._id}
      className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
    >
      {/* Image Section */}
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={allcampaign.image}
          alt={allcampaign.campaigntitle}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{allcampaign.campaigntitle}</h2>
        <p className="text-md text-gray-600 mt-2">{allcampaign.campaigntype}</p>
        <p className="text-sm text-gray-500 mt-1"> {allcampaign.deadline}</p>
        
        {/* Button Section */}
        <div className="mt-4">
          <Link to={`/campaign/${allcampaign._id}`}>
            <button className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition duration-300">
               See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
    );
};

export default AllCampaign;