import React from "react";
import categories from "../../api/Categories.json";

const Categories = () => {
  return (
    <div className="container-custom py-4">
      <h6 className="text-[14px] font-bold">Kategoriler</h6>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mt-3">
        {categories.map((category) => {
          return (
            <div
              className="flex flex-col items-center pt-2 pb-3 group hover:bg-gray-200 duration-200 bg-opacity-50 rounded-md cursor-pointer"
              key={category.id}
            >
              <img width={48} height={48} src={category.image} alt={category.title} />
              <span className="text-[15px] text-black-text font-semibold select-none group-hover:text-purple-dark duration-200">
                {category.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

