import React from "react";
import RatingCard from "./RatingCard";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="pt-10 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[40%] space-y-2">
        <h1 className="font-semibold text-lg pb-4">Review & Ratings</h1>

        <ReviewCard />
      </section>
     <section className="w-full md:w-1/2 lg:w-[60%]">
  <div className="mt-10">
    <div className="space-y-5">
      {[1, 1, 1].map((item) => (
        <div className="space-y-4">
          <RatingCard />
          <Divider />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Review;
