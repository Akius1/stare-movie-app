import { sql } from "../stores/pg";
import { filmType } from "../schema/types/index";
export async function getFilmByName(name: string) {
  try {
    return await sql`SELECT * FROM films WHERE name = ${name}`;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// add film
export async function createFilm(data: filmType) {
  try {
    return await sql`INSERT INTO films ${sql(data)} RETURNING *`;
  } catch (error) {
    return error.message;
  }
}
