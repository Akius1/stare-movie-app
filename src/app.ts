import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import VersionOneRoute from "./routes";
import flash from "express-flash";
import  fs from "fs";

require("dotenv").config();

const app = express();

app.disable("x-powered-by");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash());

//can access route 'http://localhost:3001/apiv1/students'
app.use("/apiv1", VersionOneRoute);


const clientPath = path.join(__dirname, '../', 'client/build');

if(fs.existsSync(clientPath)){
  app.use(express.static(clientPath));
  app.get('/*', (_req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  })
};
// app.use(express.static(path.join(__dirname, "public")));
// error handler

// catch 404 and forward to error handler
app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});
app.use(function (err: HttpError, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: "couldn't access page, please retry again" });
});

export default app;
