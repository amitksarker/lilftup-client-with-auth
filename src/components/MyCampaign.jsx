import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaign = () => {
    const campaignData = useLoaderData();
    // const [campaigns, setCampaigns] = useState([campaignData]);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/campaign/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Campaign has been deleted.",
                        icon: "success"
                      });
                      // const remaining = campaigns.filter(cam = cam._id !== _id);
                      //  setCampaigns(remaining);
                }
              })
            }
          });
    }

    return (
        <div>
            <h1 className='font-bold text-2xl text-center my-8'> My Campaign: {campaignData.length} </h1>
            <div className='grid mx-8 gap-4'>
                {
                    campaignData.map(campaign => 
                    <div key={campaign._id} 
                         className="card card-side bg-base-100 shadow-sm">
                        <figure>
                          <img
                            src={campaign.image}
                            alt={campaign.image} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title font-bold text-2xl">{campaign.campaigntitle}</h2>
                          <div className='flex justify-between font-semibold'>
                            <p>Name: {campaign.username}</p>
                            <p>{campaign.campaigntype}</p>
                          </div>
                          <div className='flex justify-between'>
                          <p>Date: {campaign.deadline}</p>
                          <p className='font-bold'>${campaign.Minimumdonationamount}</p>
                          </div>
                          <p>{campaign.description}</p>
                          
                        </div>
                        <div className="card-actions justify-end flex flex-col">
                            <Link to={`/updateCampaign/${campaign._id}`} >
                            <button className="btn btn-outline btn-primary">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(campaign._id)} className="btn btn-primary">Delete </button>
                        </div>
                      </div>)
                }
            </div>
        </div>
    );
};

export default MyCampaign;