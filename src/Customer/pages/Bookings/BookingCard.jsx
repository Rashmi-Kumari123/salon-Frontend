
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
import React from "react";


const BookingCard = (booking) => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold"> {booking.salon.name} </h1>
        <div>
          {booking.services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </div>
        <div>
          <p className="font-semibold">
            Time & Date <ArrowRightAltIcon /> {booking.startTime?.split("T")[0]}{" "}
          </p>
          <p className="text-slate-700">{booking.startTime?.split("T")[1]} To{" "}
            {booking.endTime?.split("T")[1]}</p>
        </div>
      </div>

      <div className="space-y-2">
        <img
          className="h-28 w-28"
          src={booking.salon.images[0]} 
          alt=""
        />
        <p className="text-center">₹{booking.totalPrice}</p>

        <Button color="error" variant="outlined">
          
          "CANCELLED"
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
