import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'


const AddCampaign = () => {

    const {user,setCampaigns}=useContext(AuthContext);
    
   const handleToAddCampaign = e =>{
        e.preventDefault();

        const form=e.target;
        const image=form.image.value;
        const title=form.title.value;
        const type=form.type.value;
        const description=form.description.value;
        const minDonation=form.minDonation.value;
        const deadline=form.deadline.value;
        const newCampaign={image,title,type,description,minDonation,deadline}
        
        console.log(newCampaign)
        fetch('https://crowdcube-server-orcin.vercel.app/campaign',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCampaign)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Congrats!",
                    text: "Successfuly added new Campaign",
                    icon: "success"
                  });
                 
            }
            console.log(data)
        })
    }
    return (
        <>
         
         <div className="min-h-screen  flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-blue-50 border shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Campaign</h2>
        <form  onSubmit={handleToAddCampaign}>
          {/*  Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Campaign Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter campaign title"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Campaign Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Campaign Type</label>
            <select
              name="type"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="" disabled>Select a campaign type</option>
              <option value="personal issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative ideas">Creative Ideas</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter campaign description"
              className="w-full p-2 border rounded-md"
              rows="5"
              required
            />
          </div>

          {/* Minimum Donation */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Minimum Donation Amount</label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter minimum donation amount"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Deadline */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Deadline</label>
            <input
              type="date"
              name="deadline"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* User Email (Read Only) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">User Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              defaultValue={user?.email || ''}
              className="w-full p-2 border bg-gray-300 rounded-md"
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">User Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              defaultValue={user?.displayName || ''}
              className="w-full p-2 border bg-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>

        </>
    );
};

export default AddCampaign;