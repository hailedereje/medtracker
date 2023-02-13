import React from "react";
import { Link } from "react-router-dom";
import EmergencyContact from "./EmergencyContact";
import PersonalInfo from "./PersonalInfo";
import PostalAddress from "./PostalAddress";
function ProfileMiddle() {
  return (
    <div
      data-testid="pmiddle"
      className="bg-white text-black m-5 p-5 rounded overflow-y-auto h-[600px]"
    >
      <h1>Edit:My Profile</h1>

      <div data-testid="coll" className="flex gap-6">
        <PersonalInfo />

        <PostalAddress />

        <EmergencyContact />
      </div>

      <div data-testid="test1" className="flex float-right">
        <div>
          <Link
            to="/sub"
            className="rounded-lg px-10 py-1 border border-[#4dd7f9] text-[#4dd7f9]"
          >
            Cancel
          </Link>
        </div>
        <div className="ml-3">
          <button className="rounded-lg px-10 py-1 border border-[#4dd7f9] bg-[#4dd7f9] text-[white]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileMiddle;
