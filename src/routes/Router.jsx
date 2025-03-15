import { createBrowserRouter } from 'react-router-dom';
import AddCampaign from '../components/AddCampaign';
import Home from '../components/Home';
import Body from '../components/Body';
import MyCampaign from '../components/MyCampaign';
import UpdateCampaign from '../components/UpdateCampaign';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';
import MyDonations from '../components/MyDonations';
import AllCampaign from '../components/AllCampaign';
import CampaignDetails from '../components/CampaignDetails';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <h1> error </h1>,
        children: [
            {
                path: '/',
                element: <Body></Body>,
                loader: () => fetch('http://localhost:5000/campaign')
                
            },
            {
                path:'allcampaign',
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: 'campaign/:_id',
                element: <PrivateRoute>
                    <CampaignDetails></CampaignDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params._id}`)
            },             
            {
                path: 'addCampaign',
                element: <PrivateRoute>
                    <AddCampaign></AddCampaign>
                </PrivateRoute>,
            },
            {
                path: 'Mycampaign',
                element: <PrivateRoute>
                            <MyCampaign></MyCampaign>
                        </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: 'updateCampaign/:id',
                element: <PrivateRoute>
                    <UpdateCampaign></UpdateCampaign>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: 'Mydonations',
                element: <PrivateRoute>
                    <MyDonations></MyDonations>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/donate')
            },
            {
                path: 'Login',
                element: <Login></Login>,
            },
            {
                path: 'Register',
                element: <Register></Register>,
            },
        ],
      },




])

export default Router;