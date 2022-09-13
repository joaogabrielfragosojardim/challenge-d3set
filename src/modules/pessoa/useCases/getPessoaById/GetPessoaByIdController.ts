import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { GetPessoaByIdUseCase } from "./GetPessoaByIdUseCase";

export class GetPessoaByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const getPessoaByIdUseCase = new GetPessoaByIdUseCase();

    try {
      const result = await getPessoaByIdUseCase.execute(id);

      return res.status(200).json(result);
    } catch {
      throw new AppError("Erro inesperado", 500);
    }
  }
}
