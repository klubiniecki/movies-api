import db from "mongoose";

export const ObjectId = db.Types.ObjectId;

const dbInit = () => {
  db.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  db.connection.on("error", err => console.error("Database error:", err));
  db.connection.once("open", () => {
    console.log("Database connected");
    db.set("useFindAndModify", false);
  });
};

export default dbInit;
