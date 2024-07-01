const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
      "mongodb+srv://bishwasritik07:7PEDXstDWU1OifPK@cluster0.arjcq4l.mongodb.net/todo-manager"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
