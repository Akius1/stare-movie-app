import { Request, Response, Router } from "express";
const router = Router();

/* Registration Route. */
router.get("/", async function (_req: Request, res: Response) {
  res.status(200).json({ successs: "welcom" });
});

export default router;
