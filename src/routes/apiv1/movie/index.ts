import { Request, Response, Router } from "express";

const router = Router();

/* Movie Routes. */
router.post("/", async function (_req: Request, res: Response) {
  res.status(200).json({ movie: "Home alone" });
});

export default router;
