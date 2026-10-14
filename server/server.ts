import "dotenv/config";
import app from "@/app.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
};

startServer();
