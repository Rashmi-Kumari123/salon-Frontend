import React, { useState } from "react";
import { Button } from "@mui/material";
import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
const Category = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tab) => () => setActiveTab(tab);
  return (
    <div>
      <div className="flex items-center gap-5">
        <Button
          onClick={handleTabClick(1)}
          variant={activeTab === 1 ? "contained" : "outlined"}
        >
          All Categories
        </Button>

        <Button
          onClick={handleTabClick(2)}
          variant={activeTab === 2 ? "contained" : "outlined"}
        >
          Create New Category
        </Button>
      </div>
      <div className="mt-10">
        {activeTab === 1 ? <CategoryTable /> : <CategoryForm />}
      </div>
    </div>
  );
};

export default Category;
