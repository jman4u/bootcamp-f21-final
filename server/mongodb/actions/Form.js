import mongo from "../index";
import Form from "../models/Form";

export async function getForms() {
  await mongo();
  const forms = Form.find();
  if (forms !== null) {
    return forms;
  } else {
    throw new Error("No forms found");
  }
};

