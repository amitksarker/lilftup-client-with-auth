import React from 'react';

const HowToWork = () => {
    return (
        <div className='px-4 py-6'>
            <div className='flex flex-col items-center my-6'>
                <h1 className='font-bold text-4xl text-center'>How To Work</h1>
                {/* Card Section */}
                <div className='flex flex-wrap justify-center mt-4 space-x-6 space-y-6 md:space-x-6 md:space-y-0'>
                    {/* Card 1 */}
                    <div className="card bg-base-100 w-full sm:w-96 md:w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/Gfr6znTz/Donation-Page-Feature.jpg"
                                alt="Donation Instructions"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructions For Donation</h2>
                            <p>There are many ways to give to help children in the U.S and around the world in need. <br />
                                Find a way to donate to children that works best for you.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 w-full sm:w-96 md:w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Information About Collection</h2>
                            <p>The term "collection" can refer to the process of gathering <br />
                                information or a group of items that have been gathered.</p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co.com/BV6486jY/Flatpack2.png"
                                alt="Collection Information"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 w-full sm:w-96 md:w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/TDVLvrxT/images.jpg"
                                alt="Supported Divisions"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Supported Divisions</h2>
                            <p>I'm sitting at about 100 divisions. While my cap is 90. <br />
                                This gives some pretty significant penalties which makes sense.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToWork;
