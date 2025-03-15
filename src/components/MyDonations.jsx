import React from 'react';
import { useLoaderData } from 'react-router-dom';


const MyDonations = () => {

    const donates = useLoaderData();


    return (
        <div>
           <h1 className='font-bold text-center'> My Donations is here:  {donates.length}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
              {donates.map(donate => (
                <div 
                  key={donate._id} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                >
                  {/* Image Section */}
                  <figure className="w-full h-52 overflow-hidden">
                    <img
                      src={donate.image}
                      alt={donate.campaigntitle}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </figure>

                  {/* Card Content */}
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-800">{donate.campaigntitle}</h2>
                    
                    <div className="flex justify-between text-gray-600 mt-2">
                      <p className="font-medium"> {donate.username}</p>
                      <p className="font-medium"> {donate.useremail}</p>
                    </div>

                    <p className="text-sm text-gray-500 mt-2 font-semibold"> {donate.campaigntype}</p>
                    <p className="text-gray-700 mt-2">{donate.description}</p>

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-semibold text-blue-600">${donate.Minimumdonationamount}</p>
                      <p className="text-sm text-gray-500"> {donate.deadline}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
    );
};

export default MyDonations;