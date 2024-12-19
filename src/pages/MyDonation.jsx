import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://crowdcube-server-orcin.vercel.app/mydonations?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setDonations(data))
        .catch((error) => console.error("Error fetching donations:", error));
    }
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Donations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation._id} className="bg-white  shadow-lg rounded-lg p-4">
            <img className="justify-center items-center w-full" src={donation.image} alt="" />
            <h3 className="text-lg font-bold text-blue-500">{donation.title}</h3>
            <p className="text-gray-700">Donated on: {new Date(donation.date).toLocaleDateString()}</p>
            <p className="text-gray-700">Campaign ID: {donation.campaignId}</p>
            <p className="text-gray-700">Donor: {user.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
