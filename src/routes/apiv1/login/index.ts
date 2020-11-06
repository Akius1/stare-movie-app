import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const obj = {
    data: "Hello world",
  };
  res.status(200).json(obj);
});

export default router;
