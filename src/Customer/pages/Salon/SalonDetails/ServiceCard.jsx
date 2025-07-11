import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import { Button } from "@mui/material";

const ServiceCard = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <div className="space-y-1 w-[60%]">
          <h1 className="text-2xl font-semibold">
            Hair Care & Styling Services
          </h1>
          <p className="text-gray-500 text-sm">
            Classic Haircut (Trim & Shape)
          </p>
          <div className="flex items-center gap-3">
            <p>₹200</p>
            <FiberManualRecord sx={{ fontSize: "10px", color: "gray" }} />
            <p>30 mins</p>
          </div>
        </div>
        <div className="space-y-3">
          <img
            className="w-32 h-32 object-cover rounded-md"
            src="https://content.latest-hairstyles.com/wp-content/uploads/professional-bob-cut-with-brushlight-hair-color.jpg"
            alt="Haircut"
          />
          <Button fullWidth variant="outlined">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
