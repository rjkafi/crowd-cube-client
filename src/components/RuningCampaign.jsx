import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Type Writer styles 
import { Typewriter } from 'react-simple-typewriter'

const RuningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("https://crowdcube-server-orcin.vercel.app/campaign");
        const data = await response.json();
        setCampaigns(data); 
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <div className=" bg-gray-100 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Running Campaigns
        </h2>
        <h4 className="text-xl font-semibold text-center mb-3">These are defines 
         <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' the Purpose.', ' Creative Presentation', ' Multi-Channel Approach', ' Evaluate Results']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campaigns.slice(0, 6).map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border-2"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {campaign.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">Type: {campaign.type}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Minimum Donation: ${campaign.minDonation}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 my-3 line-clamp-2">
                  {campaign.description}
                </p>
                <Link
                    to={`/allcampaign/${campaign._id}`}
                    className="bg-blue-500 text-white py-2 px-4  rounded-md hover:bg-blue-600 transition"
                  >
                    See More
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RuningCampaign;
