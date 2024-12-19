import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData(); 
  const navigate = useNavigate();

  const handleDonate = async () => {
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);

    if (currentDate > campaignDeadline) {
      Swal.fire({
        title: "Donation Closed",
        text: "Sorry, this campaign's deadline has passed. You can no longer donate to it.",
        icon: "info",
      });
      return;
    }

    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to donate.",
        icon: "warning",
      });
      navigate("/login");
      return;
    }

    const donationData = {
      campaignId: campaign._id,
      title: campaign.title,
      userEmail: user.email,
      username: user.displayName || user.email.split("@")[0],
      date: new Date(),
    };

    fetch("https://crowdcube-server-orcin.vercel.app/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You!",
            text: "Donation successful!",
            icon: "success",
          });
          navigate("/mydonation");
        }
      })
      .catch((error) => {
        console.error("Error donating:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          {campaign.title}
        </h2>
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full  object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 mb-2">Type: {campaign.type}</p>
        <p className="text-gray-700 mb-2">
          Minimum Donation: ${campaign.minDonation}
        </p>
        <p className="text-gray-700 mb-2">
          Deadline: {new Date(campaign.deadline).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4">{campaign.description}</p>

        {/* Deadline Status */}
        {new Date() > new Date(campaign.deadline) ? (
          <p className="text-red-500 font-bold mb-4">Campaign has ended. Donation is closed.</p>
        ) : (
          <button
            onClick={handleDonate}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Donate
          </button>
        )}
      </div>
    </div>
  );
};

export default CampaignDetails;
