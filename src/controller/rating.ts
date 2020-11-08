import { sql } from "../stores/pg";
import { rateType } from "../schema/types/index";

export async function rateFilm(data: rateType) {
  try {
    return await sql`INSERT INTO ratings ${sql(data)}  RETURNING *`;
  } catch (error) {
    console.error(error);
    return error;
  }
}
