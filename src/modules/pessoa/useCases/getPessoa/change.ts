import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { GetPessoaDTO } from "../dtos";
import { GetPessoaUseCase } from "./getPessoaUseCase";

export class GetPessoasController {
  async handle(req: Request, res: Response) {
    let { phoneQuantity }: GetPessoaDTO = req.query;
    const numberPhoneQuantity = parseInt(phoneQuantity || "-1");

    const getPessoaUseCase = new GetPessoaUseCase();

    try {
      const result = await getPessoaUseCase.execute(numberPhoneQuantity);

      return res.status(200).json(result);
    } catch {
      throw new AppError("Erro inesperado", 500);
    }
  }
}
