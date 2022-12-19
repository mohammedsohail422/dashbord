import React from "react";
import { Button } from "@mui/material";
import Tables from "./Tables";

const SendBottom = () => {
  return (
    <div>
      <div className="flex justify-between  p-0 m-0 items-center">
        <h6 className="text-xl mt-3">Doctor’s Invitation List</h6>
        <Button className="bg-white btn-logout text-primary sidebar-logout-btn lowercase	 ">
          Refresh
        </Button>
      </div>
      <div className="bg-litePurple tab-component ">
        <Tables />
      </div>
    </div>
  );
};

export default SendBottom;
