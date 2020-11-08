import { Request, Response, Router } from "express";
import { rateFilm } from "../../../controller/rating";
import { validateRating } from "../../../schema/validateRating";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const validRating = validateRating(req.body);
  if (validRating?.error) {
    return res.status(404).json({ errorMessage: "Invalid comment" });
  }
  const rate = await rateFilm(validRating?.value);
  return res.status(200).json(rate);
});

export default router;
