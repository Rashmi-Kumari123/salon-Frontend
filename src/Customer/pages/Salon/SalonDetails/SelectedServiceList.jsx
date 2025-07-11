import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SelectedServiceList = () => {
  return (
    <div className="space-y-2 my-5">
      {[1, 1, 1, 1, 1].map((item) => (
        <div className="py-2 px-4 rounded-md bg-slate-100 flex items-center justify-between">
          <h1 className="font-thin">Girls Hair Styling</h1>
          <p>₹399</p>
          <IconButton>
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default SelectedServiceList;
