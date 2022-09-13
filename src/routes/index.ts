import { Router } from "express";
import { pessoaRoutes } from "./pessoa.routes";
import { pessoaTelefone } from "./pessoaTelefone.routes";

const routes = Router();

routes.use("/pessoa", pessoaRoutes);
routes.use("/pessoaTelefone", pessoaTelefone);

export { routes };
