import mongo from "../index";
import Cat from "../models/Cat";

export async function getCats() {
  await mongo();
  const cats = Cat.find();
  if (cats !== null) {
    return cats;
  } else {
    throw new Error("No cats found");
  }
}

export async function findAdoptableCats() {
  await mongo();
  const adoptable = Cat.find({ isAdopted: { $eq: true } });
  if (adoptable !== null) {
    return adoptable;
  } else {
    throw new Error("No adoptable cats found");
  }
}

export const getCat = async (id) => {
  if (!id) {
    throw new Error("no cat id");
  }
  await mongo();

  const cat = await Cat.find({ _id: id });

  if (cat !== null) {
    return cat;
  } else {
    throw new Error("No cat found");
  }
};
