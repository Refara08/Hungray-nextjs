import dbConnect from "../../../utils/mongo";
import Resto from "../../../model/Resto";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const resto = await Resto.find();
      res.status(200).json(resto);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const resto = await Resto.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(resto);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const resto = await Resto.create(req.body);
      res.status(201).json(resto);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
