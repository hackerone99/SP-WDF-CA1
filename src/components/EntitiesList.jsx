import React from "react";
import Entity from "./Entity";
import {
  entityItems,
  selectedCategory,
  selectedEntities,
  deleteEntityItem,
} from "../store/entitiesStore";

const DeleteButton = () => {
  const handleDelete = () => {
    selectedEntities.value.forEach((id) => {
      deleteEntityItem(id); 
    });
  };

  return <button onClick={handleDelete}>Delete all selected</button>;
};

const EntitiesList = () => {
  if (selectedCategory.value.length != 0) {
    return (
      <div className="entity-list">
        <DeleteButton />
        {entityItems.value
          .filter((item) => selectedCategory.value.includes(item.category))
          .map((item, index) => {
            return <Entity key={index} item={item} />;
          })}
      </div>
    );
  }

  return (
    <div className="entity-list">
      <DeleteButton />
      {entityItems.value.map((item, index) => {
        return <Entity key={index} item={item} />;
      })}
    </div>
  );
};

export default EntitiesList;
