import {
  getForm,
  getForms,
  getFormsForCat,
  setApproved,
} from "../../../server/mongodb/actions/Form";

const handler = (req, res) => {
  const id = req.query.id;
  const cat = req.query.cat;

  if (req.method === "GET") {
    if (!id && !cat) {
      return res.status(400).json({
        success: false,
        message: "No valid ID",
      });
    } else if (!id) {
      getFormsForCat(cat).then((text) => {
        return res
          .status(200)
          .json({
            success: true,
            payload: text,
          })
          .catch((err) => {
            return res.status(400).json({
              success: false,
              message: err.message,
            });
          });
      });
    } else {
      getForm(id)
        .then((text) => {
          return res.status(200).json({
            success: true,
            payload: text,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            messsage: err.message,
          });
        });
    }
  }
  //make elif for req.method equals PUT
  //and update form to be approved using setAprroved
  //but also check if id is not null
};
export default handler;
