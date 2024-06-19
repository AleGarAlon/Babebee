const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    body: {
      type: String,
      required: [true, "BOdy is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Article = model("Article", articleSchema);

module.exports = Article;
