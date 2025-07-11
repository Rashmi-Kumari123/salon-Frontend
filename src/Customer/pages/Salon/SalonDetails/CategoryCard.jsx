import React from "react";

const CategoryCard = ({ handleSelectCategory, item, selectedCategory }) => {
  return (
    <div
      onClick={handleSelectCategory}
      className="px-3 py-2 cursor-pointer flex gap-2 items-center bg-green-500 text-white rounded-md"
    >
      <img
        className="w-14 h-14 object-cover rounded-full"
        src="https://i.pinimg.com/originals/4a/eb/3b/4aeb3b1690a6e0c375a4febf9de12f27.jpg"
        alt=""
      />
      <h1>Bridal Makeup</h1>
    </div>
  );
};

export default CategoryCard;
