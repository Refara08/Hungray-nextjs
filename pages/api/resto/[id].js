import dbConnect from "../../../utils/mongo";
import Resto from "../../../model/Resto";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "PUT") {
    try {
      const resto = await Resto.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(resto);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
