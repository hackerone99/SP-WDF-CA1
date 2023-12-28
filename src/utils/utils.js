import { v4 as uuidv4 } from "uuid";

export const generateSampleList = () => {
  return [
    {
      id: uuidv4(),
      category: "abc",
    },
    {
        id: uuidv4(),
        category: "abc",
      },
      {
        id: uuidv4(),
        category: "def",
      },
      {
        id: uuidv4(),
        category: "def",
      },
      {
        id: uuidv4(),
        category: "hij",
      },
  ];
};

export const generateRandomId = (category) => {
  return {
    id: uuidv4(),
    category,
  }
}
