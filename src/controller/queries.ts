import { sql } from "../stores/pg";
import { userType } from "../schema/types/index";

//get user by email
export async function getUserByEmail(email: string) {
  try {
    return sql`SELECT * FROM users WHERE email = ${email}`.then(
      ([data]) => data,
    );
  } catch (error) {
    console.error(error);
    return -1;
  }
}

//add user
export async function createUser(data: userType) {
  try {
    return sql`INSERT INTO users ${sql(data)} RETURNING *`.then(
      ([data]) => data,
    );
  } catch (error) {
    return error.message;
  }
}

//get user by Id
export async function getUserById(id: string) {
  try {
    return sql`SELECT * FROM user WHERE id = ${id}`.then(([data]) => data);
  } catch (error) {
    console.error(error);
    return -1;
  }
}
