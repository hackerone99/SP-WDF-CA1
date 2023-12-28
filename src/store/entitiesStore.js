import { signal } from "@preact/signals-react";
import { generateSampleList, generateRandomId } from "../utils/utils";

export const entityItems = signal(generateSampleList());

export const addCategoryItem = (category) => {
  entityItems.value = [...entityItems.value, generateRandomId(category)];
};

export const deleteEntityItem = (id) => {
  entityItems.value = entityItems.value.filter((item) => item.id !== id);
};

export const selectedCategory = signal("");

export const selectedEntities = signal([]);
