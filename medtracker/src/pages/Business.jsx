import React from "react";

import TopBusiness from "../Components/Business/BusinessTop";
import BusinessMiddle from "../Components/Business/BusinessMiddle";
import BusinessBottom from "../Components/Business/BusinessBottom";

function Business() {
  return (
    <div data-testid = "business">
      <TopBusiness />
      <BusinessMiddle />
      <BusinessBottom />
    </div>
  );
}

export default Business;
