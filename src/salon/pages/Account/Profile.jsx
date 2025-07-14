import React from "react";
import ProfileFieldCard from "./ProfileFieldCard";
import { Divider } from "@mui/material";

const Profile = () => {
  return (
    <div className="lg:px-20 lg:pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-5xl font-bold pb-5">Rashmi Salon</h1>
        <section className="grid grid-cols-2  gap-3">
          <div className="col-span-2">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-hair-salon-in-orange-and-black-paint-image_2691249.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full  rounded-md h-[15rem] object-cover"
              src="https://st3.depositphotos.com/12039412/16353/i/450/depositphotos_163531582-stock-photo-woman-in-beauty-salon-getting.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full  rounded-md h-[15rem] object-cover"
              src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg"
              alt=""
            />
          </div>
        </section>
      </div>

      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Owner Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"Owner name"} value={"Rashmi Shah"} />
          <Divider />
          <ProfileFieldCard
            keys={"email"}
            value={"rashmi@gmail.com"}
          />
          <Divider />
          <ProfileFieldCard keys={"role"} value={"salon_owner"} />
          <Divider />
          
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"salon name"} value={"Rashmi salon"} />
          <Divider />
          <ProfileFieldCard
            keys={"salon address"}
            value={"ambavadi choke, banglore"}
          />
          <Divider />
          <ProfileFieldCard keys={"open time"} value={"10:00 AM"} />
          <Divider />
          <ProfileFieldCard keys={"close time"} value={"09:00 PM"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
