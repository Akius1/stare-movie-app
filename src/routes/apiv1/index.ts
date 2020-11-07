import { Router } from "express";

import RegistrationRoutes from "./register";
import LoginRoutes from "./login";
import MovieRoutes from "./movie";

const router = Router();

/* Routes */
router.use("/register", RegistrationRoutes);
router.use("/login", LoginRoutes);
router.use("/logout", MovieRoutes);

export default router;
