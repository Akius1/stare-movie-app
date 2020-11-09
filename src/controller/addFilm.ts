import { sql } from "../stores/pg";
import { filmType } from "../schema/types/index";

// get film by name
export async function getFilmByName(name: string) {
  try {
    return await sql`SELECT * FROM films WHERE LOWER(name) SIMILAR TO ${
      "%" + name + "%"
    }`;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// get film by id
export async function getFilmById(id: string) {
  try {
    const result = sql`SELECT * FROM films WHERE id = ${id}`;
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// get all films
export async function getAllFilms() {
  try {
    return await sql`SELECT * FROM films`;
  } catch (error) {
    console.error(error);
    return error;
  }
}
// delete film
export async function deleteFilmById(id: string) {
  try {
    return await sql`DELETE FROM films where id = ${id} RETURNING *`;
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

// update film
export async function updateFilm(data: filmType, id: string) {
  try {
    return await sql`UPDATE films SET
    name = ${data.name},
    description = ${data.description},
    genre = ${data.genre},
    ticket_price = ${data.ticket_price},
    country = ${data.country},
    image_link = ${data.image_link}
     where id = ${id} RETURNING *`;
  } catch (error) {
    return error.message;
  }
}
