import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
  const campaigns = useLoaderData();
  const [sorted, setSorted] = useState([...campaigns]);
  const [isAscending, setIsAscending] = useState(true);

  const handleToSort = () => {
    const sortedCampaigns = [...sorted].sort((a, b) => {
      if (isAscending) {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });
    setSorted(sortedCampaigns);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
        All Campaigns
      </h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleToSort}
          className="btn text-xl font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isAscending ? "Sort by Amount (Asc)" : "Sort by Amount (Desc)"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Min Donation</th>
              <th className="px-6 py-3 text-left">Deadline</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((campaign) => (
              <tr key={campaign._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-800">{campaign.title}</td>
                <td className="px-6 py-4 text-gray-600">{campaign.type}</td>
                <td className="px-6 py-4 text-gray-600">${campaign.minDonation}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-center">
                  <Link
                    to={`/allcampaign/${campaign._id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
