
import { Outlet, useLoaderData } from "react-router-dom";
// import AllCampaign from "./AllCampaign";
// import Banner from "./Banner";
import Footer from "./Footer";
// import HowToWork from "./HowToWork";
import Navbar from "./Navbar";


const Home = () => {
    // const campaigns = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            {/* <Banner></Banner>
            <div>
                <h1> Total Campaigns: {campaigns.length} </h1>
            </div>
            <AllCampaign></AllCampaign>
            <HowToWork></HowToWork> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;