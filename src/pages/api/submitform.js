import { submit } from "../../../../server/mongodb/actions/Form";

export default async function handler(req, res) {
  if (req.method === "POST") {
    submit(req.body)
      .then((form) => {
        return res.status(200).json({
          success: true,
          payload: form,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      });
  } else {
    return res.status(400).json({
      success: false,
    });
  }
}
