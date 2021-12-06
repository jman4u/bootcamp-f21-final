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
}

export async function getForm(id) {
  if (!id) {
    throw new Error("no form id");
  }
  await mongo();

  const form = await Form.find({ _id: id });

  if (form !== null) {
    return form;
  } else {
    throw new Error("No form found");
  }
}

//admin function for cat name
export async function getFormsForCat(name) {
  if (!name) {
    throw new Error("no cat name");
  }
  await mongo();

  const forms = await Form.find({ cat: name });

  if (forms !== null) {
    return forms;
  } else {
    throw new Error("No forms found");
  }
}

//submit application
export async function submit(application) {
  await mongo();
  const newApplication = await new Form(application);
  await newApplication.save(function (err) {
    if (err) {
      throw new Error(err);
    }
  });
  return newApplication;
}

//set approved for admin
export async function setApproved() {

}

