import React, { useRef } from "react";
import { addCategoryItem } from "../store/entitiesStore";

const AddEntityForm = () => {
  const inputRef = useRef(null);
  return (
    <>
      <div>
        <span>Category:</span>
        <input
          ref={inputRef}
          type="text"
          style={{ marginLeft: "15px" }}
        ></input>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            addCategoryItem(inputRef.current.value);
            inputRef.current.value=''
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddEntityForm;
