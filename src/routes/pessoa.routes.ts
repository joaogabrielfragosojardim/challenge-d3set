import { Router } from "express";
import { GetPessoasController } from "../modules/pessoa/useCases/getPessoa/GetPessoaController";
import { GetPessoaByIdController } from "../modules/pessoa/useCases/getPessoaById/GetPessoaByIdController";

const pessoaRoutes = Router();
const getPessoasController = new GetPessoasController();
const getPessoaByIdController = new GetPessoaByIdController();
pessoaRoutes.get("/", getPessoasController.handle);
pessoaRoutes.get("/:id", getPessoaByIdController.handle);

export { pessoaRoutes };
