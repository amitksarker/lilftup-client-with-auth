import React from 'react';

const CampaignCard = ({campaign}) => {
    const {image, username, 
        campaigntitle, campaigntype, description, Minimumdonationamount, deadline} = campaign;
    return (
        <div className="card lg:card-side bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <figure className="lg:w-1/3 w-full h-48 lg:h-auto flex-shrink-0">
    <img src={image} alt={campaigntitle} className="w-full h-full object-cover" />
  </figure>
  <div className="card-body p-6 flex flex-col justify-between">
    <h2 className="text-2xl font-bold text-gray-800">{campaigntitle}</h2>
    <p className="text-lg font-semibold text-gray-600">{campaigntype}</p>
    <p className="text-lg font-medium text-primary">${Minimumdonationamount}</p>
    <div className="card-actions mt-4">
      <button className="btn btn-primary w-full lg:w-auto px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
        See More
      </button>
    </div>
  </div>
</div>


    );
};

export default CampaignCard;