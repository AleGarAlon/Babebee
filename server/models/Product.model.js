const { Schema, model } = require("mongoose");

// Sub-schema for size
const sizeSchema = new Schema(
  {
    length: Number,
    height: Number,
    width: Number,
    weight: Number,
  },
  { _id: false }
);

// Sub-schema for bundle
const bundleSchema = new Schema(
  {
    bundle1: { type: Schema.Types.ObjectId, ref: "Product", default: null },
    bundle2: { type: Schema.Types.ObjectId, ref: "Product", default: null },
    bundle3: { type: Schema.Types.ObjectId, ref: "Product", default: null },
    bundle4: { type: Schema.Types.ObjectId, ref: "Product", default: null },
  },
  { _id: false }
);

// Sub-schema for gallery
const gallerySchema = new Schema(
  {
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    image7: String,
    image8: String,
  },
  { _id: false }
);

// Main product schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    gallery: gallerySchema,
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    price: {
      type: String,
      required: [true, "Price is required."],
    },
    size: {
      type: {
        S: sizeSchema,
        M: sizeSchema,
        L: sizeSchema,
        Única: sizeSchema,
      },
    },
    category: {
      type: [String],
      enum: [
        "Peluches",
        "Muñecos y Dudús",
        "Hora de Jugar",
        "Estimulación Sensorial",
        "Juguetes Educativos",
        "Accesorios",
        "Decoración y Orden",
      ],
      required: [true, "Category is required."],
    },
    collection: {
      type: String,
      enum: ["Bajo el agua", "El Bosque", "Mundo Diminuto"],
    },
    reference: {
      type: String,
      required: [true, "Reference is required."],
    },
    age: {
      type: [String],
      enum: ["baby", "toddler", "kid"],
    },
    custom: {
      type: Boolean,
      default: false,
    },
    bundle: bundleSchema,
    externalLink: {
      type: String,
    },
    stock: {
      type: Number,
    },
    info: {
      type: [String],
    },
    variable: {
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
