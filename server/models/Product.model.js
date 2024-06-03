const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    image: {
      type: String,
      required: [true, "Name is required."],
    },
    gallery: {
      type: [String],
    },
    description: {
      type: String,
      required: [true, "Name is required."],
    },
    price: {
      type: Number,
      required: [true, "Name is required."],
    },
    size: {
      type: [String],
    },
    category: {
      type: String,
      required: [true, "Name is required."],
    },
    collection: {
      type: String,
    },
    reference: {
      type: String,
      required: [true, "Name is required."],
    },
    age: {
      type: String,
      required: [true, "Name is required."],
    },
    custom: {
      type: String,
    },
    bundle: {
      type: String,
    },
    externalLink: {
      type: String,
    },
    reviews: {
      type: String,
    },
    stock: {
      type: Number,
    },
    info: {
      type: [String],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
