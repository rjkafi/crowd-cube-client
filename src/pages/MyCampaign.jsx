import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";


const MyCampaigns = () => {
  const { user} = useContext(AuthContext); 
  const [campaigns,setCampaigns]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://crowdcube-server-orcin.vercel.app/campaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setCampaigns(data))
        .catch((error) => console.error("Error fetching campaigns:", error));
    }
  }, [user?.email]);
   
  const handleTODelete = (_id) => {
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
        fetch(`https://crowdcube-server-orcin.vercel.app/campaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              const remainingCampaign = campaigns.filter((camp) => camp._id !== _id);
              setCampaigns(remainingCampaign);
            } else {
              Swal.fire("Error!", "Failed to delete the campaign.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire("Error!", "An error occurred while deleting the campaign.", "error");
          });
      }
    });
  };
  

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Campaigns</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Minimum Donation</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="p-3 border">{campaign.title}</td>
              <td className="p-3 border">{campaign.type}</td>
              <td className="p-3 border">${campaign.minDonation}</td>
              <td className="p-3 border">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleTODelete(campaign._id)}
                >
                  Delete
                </button>
               <Link to={`/updatecampaign/${campaign._id}`}>
               <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
               </Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaigns;
