import { Request, Response, Router } from "express";
import { validateMFilmInfo } from "../../../schema/validateFilmInfo";
import { getFilmByName, createFilm } from "../../../controller/addFilm";
import { Row, RowList } from "postgres";

const router = Router();

/* Movie Routes. */
router.post("/", async function (req: Request, res: Response) {
  const validFilmInfo = await validateMFilmInfo(req.body);
  if (validFilmInfo?.error) {
    res.status(404).json({ error: "Invalid data" });
  }

  const filmExists: RowList<Row[]> = await getFilmByName(
    validFilmInfo?.value.name,
  );

  if (filmExists.count) {
    return res.json({ message: "Film already exist" });
  }

  const myFilm = await createFilm(validFilmInfo?.value);

  return res.status(200).json(myFilm);
});

export default router;
