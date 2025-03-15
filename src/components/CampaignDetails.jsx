import React, { useContext } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CampaignDetails = () => {
    const { _id } = useParams(); 
    const data = useLoaderData(); 
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 

    if (!user) {
        navigate('/login'); // Redirect to login if user is not logged in
        return null;
    }

    const campaign = data; 
    console.log(campaign);

    const { campaigntitle, campaigntype, image, username, useremail, deadline, description, Minimumdonationamount } = campaign; 

    const handleDonate = (event) => {
        event.preventDefault();

        if (!user) { 
            navigate('/login'); // Ensure user is logged in before donating
            return;
        }

        const donationData = {
            campaignId: _id,
            campaigntitle: campaign.campaigntitle,
            campaigntype: campaign.campaigntype,
            image: campaign.image,
            username: user.displayName || "Anonymous",  // Use logged-in user's name
            useremail: user.email,  // Use logged-in user's email
            deadline: campaign.deadline,
            description: campaign.description,
            Minimumdonationamount: campaign.Minimumdonationamount,
        };
        console.log(donationData);
        
        fetch('http://localhost:5000/donate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Donation successful!');
        })
    }

    return (
        <div>
            
            <h1 className='font-bold text-xl text-center'>Campaign Details Here</h1>
            <div className='flex items-center gap-6 m-8'>
                <img src={image} alt="" className='rounded-lg border border-red-50' />
                <div>
                    <h1 className='font-bold text-2xl'> {campaigntitle} </h1>
                    <p>Campaign-type:<span className='font-bold'> {campaigntype}  </span></p>
                    <div className="divider m-0"></div>
                    <h3>by:{username} </h3>
                    <h3>E-mail:{useremail} </h3>
                    <div className="divider m-0"></div>    
                    <p>Description: {description}</p>
                    <div className='flex justify-between'>
                                        <p>Amount: {Minimumdonationamount} </p>
                                        <p>Deadline: {deadline} </p>
                    </div>
                    <button onClick={handleDonate} className='btn btn-outline btn-primary mt-2'> Donate </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;

