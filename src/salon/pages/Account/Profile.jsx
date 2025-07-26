import React from "react";
import ProfileFieldCard from "./ProfileFieldCard";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const {salon, auth} = useSelector(store => store);
  return (
    <div className="lg:px-20 lg:pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-5xl font-bold pb-5">Rashmi Salon</h1>
        <section className="grid grid-cols-2  gap-3">
          <div className="col-span-2">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              // src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-hair-salon-in-orange-and-black-paint-image_2691249.jpg"
              src = {salon.salon.images[0]}
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full  rounded-md h-[15rem] object-cover"
              // src="https://st3.depositphotos.com/12039412/16353/i/450/depositphotos_163531582-stock-photo-woman-in-beauty-salon-getting.jpg"
              src = {salon.salon.images[1]}
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full  rounded-md h-[15rem] object-cover"
              // src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg"
              src = {salon.salon.images[2]}
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
          <ProfileFieldCard keys={"Owner name"} value={auth.user?.fullName} />
          <Divider />
          <ProfileFieldCard
            keys={"email"}
            value={auth.user?.email}
          />
          <Divider />
          <ProfileFieldCard keys={"Role"} value={"SALON_OWNER"} />
          <Divider />
          
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"Salon Name"} value={salon.salon?.name} />
          <Divider />
          <ProfileFieldCard
            keys={"Salon Address"}
            value={salon.salon?.address || "not provided"}
          />
          <Divider />
          <ProfileFieldCard keys={"Open Time"} value={salon.salon?.openTime} />
          <Divider />
          <ProfileFieldCard keys={"Close Time"} value={salon.salon?.closeTime} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
