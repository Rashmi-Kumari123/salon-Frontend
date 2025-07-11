import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BookingCard = () => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold"> Rashmi Shah Salon</h1>
        <div>
          <li> Hair Cut </li>
          <li> Massage Therapy</li>
          <li> Hair Color </li>
        </div>
        <div>
          <p className="font-semibold">
            Time & Date <ArrowRightAlt /> 2025-06-26
          </p>
          <p className="text-slate-700">01:00:00 To 02:00:00</p>
        </div>
      </div>

      <div className="space-y-2">
        <img
          className="h-28 w-28"
          src="https://media.istockphoto.com/id/1064701364/photo/little-girl-at-a-hairdresser.jpg?s=612x612&w=0&k=20&c=qtlcrfhVWf4NeXppjYl3-haQ0j-YicA5gINR9kEzl20="
          alt=""
        />
        <p className="text-center">₹199</p>

        <Button color="error" variant="outlined">
          {" "}
          "CANCELLED"{" "}
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
