import { getUserByEmail, getUserById } from "./controller/queries";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

function initialize(passport: any) {
  const authenticateUser = async (
    email: string,
    password: string,
    done: any,
  ) => {
    const user: any = await getUserByEmail(email);

    console.log("the user", user);

    if (user === undefined) {
      console.log("No such User");
      return done(null, false, { maessage: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password!)) {
        console.log("correct password");
        return done(null, user);
      } else {
        console.log("Incorrect password");
        return done(null, false, { maessage: "password incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user: any, done: any) => done(null, user.user_id));
  passport.deserializeUser((id: any, done: (arg0: any) => any) => {
    return done(getUserById(id));
  });
}

export default initialize;
