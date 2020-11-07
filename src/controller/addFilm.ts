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
export async function getFilmById(id: string) {
  try {
    const result = sql`SELECT * FROM films WHERE id = ${id}`;
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getAllFilms() {
  try {
    return await sql`SELECT * FROM films`;
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
