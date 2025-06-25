import React, {useState }from 'react'
import CategoryCard from './CategoryCard';
import ServiceCard from './ServiceCard';

const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (category) => () => {
    setSelectedCategory(category);
  };

  return (
    <div className='lg:flex gap-5 h-[90vh] mt-10'>
      
      <section className='space-y-5 border-r lg:w-[25%] pr-5'>
        {[1, 1, 1].map((item, index) => (
          <CategoryCard
            selectedCategory={selectedCategory}
            item={index}
            handleCategoryClick={handleCategoryClick(index)}
          />
        ))}
      </section>

      <section className='space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto'>
        {[1, 1, 1, 1].map((item) => (
          <ServiceCard />
        ))}
      </section>

    </div>
  );
};


export default SalonServiceDetails;