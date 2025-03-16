import React from 'react';
import Swal from 'sweetalert2';


const AddCampaign = () => {
    
    const handleAddedNewCampaign = event =>{
        event.preventDefault();
        const username = event.target.username.value;
        const useremail = event.target.useremail.value;
        const image = event.target.image.value;
        const campaigntitle = event.target.campaigntitle.value;
        const campaigntype = event.target.campaigntype.value;
        const description = event.target.description.value;
        const Minimumdonationamount = event.target.Minimumdonationamount.value;
        const deadline = event.target.deadline.value;
        const NewCampaign = {username, useremail, image, campaigntitle, campaigntype, description, Minimumdonationamount, deadline}
        console.log(NewCampaign);

        fetch('https://liftup-server.vercel.app/campaign', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewCampaign)
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "New Campaign Added!",
                    icon: "success"
                  });
            }
          })
          .catch(error => console.error('Error:', error));
          
    }


    return (
        <div className="mt-8 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="font-bold text-3xl text-center text-gray-900 mb-6">Add New Campaign</h1>
    <p className="text-center text-gray-600 mb-8 text-lg">
        Getting started with Smart campaigns takes just a few minutes. After the initial setup, <br />
        Google Ads manages your campaign automatically.
    </p>
    <form onSubmit={handleAddedNewCampaign} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="User Name" name="username" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <input type="email" placeholder="User Email" name="useremail" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <input type="text" placeholder="Campaign Title" name="campaigntitle" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select name="campaigntype" className="select select-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                <option disabled selected>Campaign Type</option>
                <option>Personal Issue</option>
                <option>Startup</option>
                <option>Business</option>
                <option>Creative Ideas</option>
            </select>
            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="number" placeholder="Minimum Donation Amount" name="Minimumdonationamount" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <input type="date" name="deadline" className="input input-bordered w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div className="text-center mt-6">
            <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Add Campaign
            </button>
        </div>
    </form>
</div>


    );
};

export default AddCampaign;