import React from "react";
import EmergencyContact from "../Components/Profile/EmergencyContact";
import PersonalInfo from "../Components/Profile/PersonalInfo";
import PostalAddress from "../Components/Profile/PostalAddress";

function Profile() {
  return (
    <div className="bg-[#daf2f8]">
      <h1 className="text-[#daf2f8]">.</h1>
      <div className="bg-white text-black m-5 p-5 rounded overflow-y-auto h-[600px]">
        <h1>Edit:My Profile</h1>

        <div className="flex gap-6">
          <PersonalInfo />

          <PostalAddress />

          <EmergencyContact />
        </div>

        <div className="flex float-right">
          <div>
            <button className="rounded-lg px-10 py-1 border border-[#4dd7f9] text-[#4dd7f9]">
              Cancel
            </button>
          </div>
          <div className="ml-3">
            <button className="rounded-lg px-10 py-1 border border-[#4dd7f9] bg-[#4dd7f9] text-[white]">
              Save
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-[#daf2f8]">.</h1>
    </div>
  );
}

export default Profile;
