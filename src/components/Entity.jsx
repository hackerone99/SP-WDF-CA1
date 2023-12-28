import React from "react";
import { deleteEntityItem, selectedEntities } from "../store/entitiesStore";

const Entity = ({ item }) => {

  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      selectedEntities.value = [...selectedEntities.value, id]
    } else {
      selectedEntities.value = selectedEntities.value.filter((entityId) => entityId != id);
    }
  };

  return (
    <div className="entity-item" key={item.id}>
      <input type="checkbox" onChange={(event) => handleCheckboxChange(event, item.id)}/>
      <li>{item.id}</li>
      <li>{item.category}</li>
      <button
        onClick={() => {
          deleteEntityItem(item.id)
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Entity;
