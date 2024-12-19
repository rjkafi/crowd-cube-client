import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Root from "../layouts/Root";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CampaignDetails from "../pages/CampaignDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateCampaign from "../pages/UpdateCampaign";




const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
                
            },{
              path:'allcampaign',
              element:<PrivateRoute>
                <AllCampaign></AllCampaign>
              </PrivateRoute>,
              loader:()=> fetch('https://crowdcube-server-orcin.vercel.app/campaign')
            },{
                path: '/allcampaign/:id', 
                element: <CampaignDetails></CampaignDetails>,
                loader: async ({ params }) => {
                  const response = await fetch(`https://crowdcube-server-orcin.vercel.app/campaign/${params.id}`);
                  if (!response.ok) {
                    throw new Error('Failed to fetch campaign details');
                  }
                  return response.json(); 
                }
              }
              ,{
                path:'/addcampaign',
                element:<AddCampaign></AddCampaign>
            },{
                path:'/mycampaign',
                element:<PrivateRoute>
                    <MyCampaign></MyCampaign>
                </PrivateRoute>
            },{
                path:'/mydonation',
                element:<PrivateRoute>
                    <MyDonation></MyDonation>
                </PrivateRoute>
            },{
                path:'/login',
                element:<Login></Login>
            },{
                path:'/register',
                element:<Register></Register>
            },{
                path: '/updatecampaign/:id',
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({params})=>fetch(`https://crowdcube-server-orcin.vercel.app/campaign/${params.id}`) 
            }
        ]
    },{
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;