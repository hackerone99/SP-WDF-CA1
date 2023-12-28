import React, { useState } from "react";
import { entityItems, selectedCategory } from "../store/entitiesStore";

const FilterEntitiesForm = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const uniqueCategoriesSet = new Set(
    entityItems.value.map((item) => item.category)
  );
  const uniqueCategories = Array.from(uniqueCategoriesSet);

  const handleCheckboxChange = (event, category) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems([...checkedItems, category]);
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== category));
    }
  };
  selectedCategory.value = checkedItems;

  return (
    <div className="filter">
      {uniqueCategories.map((category, index) => {
        return (
          <div key={index} className="filter-label">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, category)}
            />
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default FilterEntitiesForm;
