import { Router } from "express";
import apiV1Route from "./apiv1";
import movieRouter from "../routes/apiv1/movie";

const router = Router();

/* GET home page. */
router.use("/", apiV1Route);
router.use("/addfilm", movieRouter);

export default router;
