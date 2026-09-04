import app from "./app";
import connectDb from "./config/db";

const PORT = 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️- Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed !! ", err);
  });
