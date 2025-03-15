import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const campaigns = useLoaderData();

    const {_id, image, username, useremail, campaigntitle, campaigntype, description, Minimumdonationamount, deadline} = campaigns;




        const handleUpdateCampaign = event =>{
                event.preventDefault();
                const username = event.target.username.value;
                const useremail = event.target.useremail.value;
                const image = event.target.image.value;
                const campaigntitle = event.target.campaigntitle.value;
                const campaigntype = event.target.campaigntype.value;
                const description = event.target.description.value;
                const Minimumdonationamount = event.target.Minimumdonationamount.value;
                const deadline = event.target.deadline.value;
                const UpdateCampaign = {_id, username, useremail, image, campaigntitle, campaigntype, description, Minimumdonationamount, deadline}
                console.log(UpdateCampaign);
        
                fetch(`http://localhost:5000/campaign/${campaigns._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(UpdateCampaign)  // Corrected variable name here
                })
                
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Good job!",
                                    text: " Campaign UPDATED!",
                                    icon: "success"
                                });
                            }
                        })
                  .catch(error => console.error('Error:', error));
                  

            }

    return (
        <div className="mt-8 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-center text-gray-800">
          Update Campaign: {campaigntitle}
        </h1>
        <p className="font-normal text-lg text-center text-gray-600 mb-6">
          Getting started with Smart campaigns takes just a few minutes. After the
          initial setup, <br /> Google Ads manages your campaign automatically.
        </p>
        <form onSubmit={handleUpdateCampaign} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="User Name"
              name="username"
              readOnly
              defaultValue={username}
              className="input input-bordered w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="User Email"
              name="useremail"
              readOnly
              defaultValue={useremail}
              className="input input-bordered w-full p-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Image"
              name="image"
              defaultValue={image}
              className="input input-bordered w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Campaign title"
              name="campaigntitle"
              defaultValue={campaigntitle}
              className="input input-bordered w-full p-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="campaigntype"
              defaultValue={campaigntype}
              className="select select-bordered w-full p-2 border rounded-md"
            >
              <option disabled>Campaign Type</option>
              <option>Personal issue</option>
              <option>Startup</option>
              <option>Business</option>
              <option>Creative ideas</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              name="description"
              defaultValue={description}
              className="input input-bordered w-full p-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Minimum donation amount"
              name="Minimumdonationamount"
              defaultValue={Minimumdonationamount}
              className="input input-bordered w-full p-2 border rounded-md"
            />
            <input
              type="date"
              placeholder="Deadline"
              name="deadline"
              defaultValue={deadline}
              className="input input-bordered w-full p-2 border rounded-md"
            />
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
            Update Campaign
          </button>
        </form>
      </div>
    );
};

export default UpdateCampaign;

    