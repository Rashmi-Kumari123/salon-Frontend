import React from "react";
import { services } from "../../../Data/Services";
import HomeServiceCard from "./HomeServiceCard";
// import SalonList from "../Salon/SalonList";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="space-y-20 ">
      <section>
        <Banner />
      </section>
      <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-2xl font-semibold pb-9">
            What are you waiting for, Bestie? 👀 👑 Your glow-up starts here!"
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {services.map((item) => (
              <HomeServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh] ">
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://img.freepik.com/premium-photo/stylist-makes-curls-curling-girl-with-long-brown-hair-professional-beauty-salon_118086-3619.jpg?semt=ais_items_boosted&w=740"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://img.freepik.com/free-photo/portrait-hairstylist-female-customer_329181-1955.jpg?semt=ais_items_boosted&w=740"
              alt=""
            />
          </div>
          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/5069455/pexels-photo-5069455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="px-20">
        <h1 className="text-3xl font-bold pb-10 ">Book Your Favorite Salon</h1>
        {/* <SalonList salons={salon.salons} /> */}
      </section>
    </div>
  );
};

export default Home;
