import React from "react";

const CategoryCard = ({ handleCategoryClick, selectedCategory, item }) => {
    return (
        <div
            onClick={handleCategoryClick}
            className={`px-3 py-2 cursor-pointer flex gap-2 items-center ${
                selectedCategory === item.id ? "bg-green-500 text-white rounded-md" : ""
            }`}
        >
            <img 
                className="w-14 h-14 object-cover rounded-full"
                src={item.image}
                alt=""  
            />
            <h1>{item.name} - {item.id}</h1>
        </div>
    );
};

export default CategoryCard;