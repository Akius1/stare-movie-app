import { Request, Response, Router } from "express";
import { userAuthorization } from "../../../middleware/checkRegisteredUser";

const router = Router();

/* Movie Routes. */
router.post("/", userAuthorization, async function (
  req: Request,
  res: Response,
) {
  console.log(req);
  res.status(200).json({ movie: "Home alone" });
});

export default router;
