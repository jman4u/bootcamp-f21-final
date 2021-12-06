import mongodb from "../../../server/mongodb";
import { getCats } from "../../../server/mongodb/actions/Adopt";
import { findAdoptableCats } from "../../../server/mongodb/actions/Adopt";
import { getCat } from "../../../server/mongodb/actions/Adopt";

export default async function handler(req, res) {
  await mongodb();
  const id = req.query.id;
  const isAdopted = req.query.isAdopted;

  if (req.method === "GET") {
    if (isAdopted) {
      findAdoptableCats()
        .then((text) => {
          return res.status(200).json({
            success: true,
            payload: text,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        });
    } else {
      if (id) {
        getCat(id)
          .then((text) => {
            return res.status(200).json({
              success: true,
              payload: text,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              success: false,
              message: err.message,
            });
          });
      } else {
        getCats()
          .then((result) => {
            return res.status(200).json({
              success: true,
              payload: result,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              success: false,
              message: err.message,
            });
          });
      }
    }
  }
}
