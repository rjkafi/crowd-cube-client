import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const campaign = useLoaderData();
  const navigate = useNavigate();
  const { _id, title, minDonation, deadline, userEmail } = campaign;

  const handleToUpdateCampaign = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedCampaign = {
      title: form.title.value,
      minDonation: form.minDonation.value,
      deadline: form.deadline.value,
    };

    fetch(`https://crowdcube-server-orcin.vercel.app/campaign/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congrats!",
            text: "Campaign Updated successfully",
            icon: "success",
          }).then(() => navigate("/mycampaign"));
        } else {
          Swal.fire({
            title: "Error!",
            text: "No changes detected or update failed.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating campaign:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating.",
          icon: "error",
        });
      });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-semibold mb-5">Update Campaign: {title}</h1>
      <form onSubmit={handleToUpdateCampaign}>
        <label className="block mb-3">
          <span>Title</span>
          <input type="text" name="title" defaultValue={title} className="border p-2 w-full" required />
        </label>
        <label className="block mb-3">
          <span>Minimum Donation</span>
          <input type="number" name="minDonation" defaultValue={minDonation} className="border p-2 w-full" required />
        </label>
        <label className="block mb-3">
          <span>Deadline</span>
          <input type="date" name="deadline" defaultValue={deadline} className="border p-2 w-full" required />
        </label>
        <label className="block mb-3">
          <span>User Email</span>
          <input type="email" value={userEmail} className="border p-2 w-full bg-gray-100" readOnly />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
