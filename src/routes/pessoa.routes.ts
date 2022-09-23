import { Router } from "express";
import { GetPessoasController } from "../modules/pessoa/useCases/getPessoa/getPessoaController";
import { GetPessoaByIdController } from "../modules/pessoa/useCases/getPessoaById/getPessoaByIdController";
import { CreatePessoaController } from "../modules/pessoa/useCases/createPessoa/CreatePessoaController";
import { EditPessoaController } from "../modules/pessoa/useCases/editPessoa/EditPessoaController";

const pessoaRoutes = Router();
const getPessoasController = new GetPessoasController();
const getPessoaByIdController = new GetPessoaByIdController();
const createPessoaController = new CreatePessoaController();
const editPessoaController = new EditPessoaController();

pessoaRoutes.get("/", getPessoasController.handle);
pessoaRoutes.get("/:id", getPessoaByIdController.handle);
pessoaRoutes.post("/", createPessoaController.handle);
pessoaRoutes.put("/:id", editPessoaController.handle);

export { pessoaRoutes };
