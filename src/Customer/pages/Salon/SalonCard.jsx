import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const SalonCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/salon:id")} className="cursor-pointer">
      <div className="w-56 md:w-80 rounded-md bg-slate-100">
        <img
          className="w-full h-[15rem] object-cover rounded-t-md"
          src="https://media.istockphoto.com/id/627788040/photo/hairdresser-doing-hairstyle.jpg?s=612x612&w=0&k=20&c=iW5aZnfj7RFfxib7r2MX62SHIAUn2x6_Klu6XFze1uY="
          alt="Salon"
        />
        <div className="p-5 space-y-2">
          <h1 className="font-medium">Pablo Salon</h1>
          <div className="flex items-center gap-1">
            <div className="text-white text-sm p-1 bg-green-700 rounded-full w-fit flex items-center">
              4.5 <StarIcon sx={{ fontSize: "16px" }} />
            </div>
          </div>
          <p className="text-gray-600">Professional haircut and styling</p>
          <p className="text-gray-500 text-sm">Adani House, Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default SalonCard;
