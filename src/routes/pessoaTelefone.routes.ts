import { Router } from "express";
import { PostPessoaTelefoneController } from "../modules/pessoaTelefone/postPessoaTelefone/PostPessoaTelefoneController";

const pessoaTelefone = Router();
const postPessoaTelefoneController = new PostPessoaTelefoneController();
pessoaTelefone.post("/", postPessoaTelefoneController.handle);

export { pessoaTelefone };
