import "dotenv/config";
import app from "@/app.js";
import { PORT } from "@/config/env.js";

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
};

startServer();
