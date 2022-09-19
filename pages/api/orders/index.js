import dbConnect from "../../../utils/mongo";
import Order from "../../../model/Order";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.find();
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
