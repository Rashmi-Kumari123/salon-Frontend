import React from "react";
// import ServiceCard from "./ServiceCard";


import SalonDetail from "./SalonDetail";

// const tabs = [
//   { name: "All Services" },
//   { name: "Reviews" },
//   { name: "Create Review" },
// ];

const SalonDetails = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   const handleActiveTab = (tab) => () => {
//     setActiveTab(tab);
//   };

  return (
    <div className="px-5 lg:px-20">
      <SalonDetail />
      {/* <div className="space-y-5">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <Button
              // color="secondary"
              onClick={handleActiveTab(tab)}
              variant={tab.name === activeTab?.name ? "contained" : "outlined"}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        <Divider />
      </div> */}
    </div>
  );
};

export default SalonDetails;
