import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CreatePessoaUseCase } from "./createPessoaUseCase";

export class CreatePessoaController {
  async handle(req: Request, res: Response) {
    const { name, birthday, phoneQuantity, phones } = req.body;

    const createPessoaUseCase = new CreatePessoaUseCase();

    try {
      const pessoa = await createPessoaUseCase.execute({
        name,
        birthday,
        phoneQuantity,
        phones,
      });

      return res.status(201).json(pessoa);
    } catch (err) {
      throw new AppError("Ocorreu um erro ao realizar o cadastro", 500);
    }
  }
}
