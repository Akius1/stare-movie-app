import { Request, Response, Router } from "express";
import { validateComment } from "../../../schema/validateComment";
import { createComment, getAllComments } from "../../../controller/comment";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const allComments = await getAllComments();
  res.status(200).json(allComments);
});

router.post("/", async (req: Request, res: Response) => {
  const validComment = validateComment(req.body);
  if (validComment?.error) {
    return res.status(404).json({ errorMessage: "Invalid comment" });
  }
  const comment = await createComment(validComment?.value);
  return res.status(200).json(comment);
});

export default router;
