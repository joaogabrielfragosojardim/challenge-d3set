import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { EditPessoaUseCase } from "./editPessoaUseCase";

export class EditPessoaController {
  async handle(req: Request, res: Response) {
    const { name, birthday, phones } = req.body;
    const { id } = req.params;

    const editPessoaUseCase = new EditPessoaUseCase();

    try {
      const pessoa = await editPessoaUseCase.execute({
        id,
        name,
        birthday,
        phones,
      });

      return res.status(201).json(pessoa);
    } catch (err) {
      throw new AppError("Ocorreu um erro ao realizar o cadastro", 500);
    }
  }
}
