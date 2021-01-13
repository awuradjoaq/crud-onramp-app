import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import routes from "./routes/routes";

const app = express();

const port = 3001;

app.use(json());

app.use("/blog", routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
