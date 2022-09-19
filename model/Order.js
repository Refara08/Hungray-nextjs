import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    orderedMeals: {
      type: [
        {
          _id: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
          amount: { type: Number, required: true },
          note: String,
        },
      ],
    },
    payment: { type: String, required: true },
    phone: { type: String, required: true },
    table: { type: String, required: true },
    orderStatus: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
