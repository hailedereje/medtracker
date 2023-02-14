import React from "react";

import ProfileMiddle from "../Components/Profile/ProfileMiddle";
import TopProf from "../Components/Profile/TopProf";
// const Firsty = () => {
//   return (
//     <h1 data-testid="ptop" className="text-[#daf2f8]">
//       .
//     </h1>
//   );
// };

function Profile() {
  return (
    <div data-testid="profile" className="bg-[#daf2f8]">
      <TopProf />
      <ProfileMiddle />
      <h1 data-testid = "ptop" className="text-[#daf2f8]">.</h1>
    </div>
  );
}

export default Profile;
