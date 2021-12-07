import mongo from "../index";
import Cat from "../models/Cat";

export async function getCats() {
  await mongo();
  const cats = await Cat.find({}).lean();
  if (cats !== null) {
    return JSON.parse(JSON.stringify(cats));
  } else {
    throw new Error("No cats found");
  }
}

export async function findAdoptableCats() {
  await mongo();
  const adoptable = await Cat.find({ isAdopted: { $eq: true } });
  if (adoptable !== null) {
    return adoptable;
  } else {
    throw new Error("No adoptable cats found");
  }
}

export async function getCat(id) {
  if (!id) {
    throw new Error("no cat id");
  }
  await mongo();

  const cat = await Cat.findOne({ _id: id }).lean();

  if (cat !== null) {
    return JSON.parse(JSON.stringify(cat));
  } else {
    throw new Error("No cat found");
  }
}
