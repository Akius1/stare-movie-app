import { db, sql } from "../stores/pg";
import { filmType } from "../schema/types/index";

// get film by name
export async function getFilmByName(name: string) {
  try {
    return await db.query(
      sql`SELECT * FROM films WHERE LOWER(name) SIMILAR TO ${"%" + name + "%"}`,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}

// get film by id
export async function getFilmById(id: string) {
  try {
    const result = db.query(sql`SELECT * FROM films WHERE id = ${id}`);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// get all films
export async function getAllFilms() {
  try {
    return await db.query(sql`SELECT * FROM films`);
  } catch (error) {
    console.error(error);
    return error;
  }
}
// delete film
export async function deleteFilmById(id: string) {
  try {
    return await db.query(sql`DELETE FROM films where id = ${id} RETURNING *`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

// add film

export async function createFilm(data: filmType) {
  try {
    return await db
      .query(
        sql`INSERT INTO films(name, description, ticket_price, country, genre, image_link) VALUES(${data.name},${data.description},${data.ticket_price},${data.country}, ${data.genre}, ${data.image_link}) RETURNING *`,
      )
      .catch((error) => console.log(error.message));
  } catch (error) {
    return error.message;
  }
}

// update film
export async function updateFilm(data: filmType, id: string) {
  try {
    return await db.query(sql`UPDATE films SET
    name = ${data.name},
    description = ${data.description},
    genre = ${data.genre},
    ticket_price = ${data.ticket_price},
    country = ${data.country},
    image_link = ${data.image_link}
     where id = ${id} RETURNING *`);
  } catch (error) {
    return error.message;
  }
}
