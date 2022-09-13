import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { PostPessoaTelefoneUseCase } from "./PostPessoaTelefoneUseCase";
import { validatePhone } from "validations-br";
import { prisma } from "../../../prisma/client";
import { Prisma } from "@prisma/client";

export class PostPessoaTelefoneController {
  async handle(req: Request, res: Response) {
    const { phone, personId } = req.body;

    if (!phone || !personId) {
      throw new AppError("Insira todos os paramêtros necessários", 400);
    }
    if (!validatePhone(phone)) {
      throw new AppError("Insira um telefone válido", 400);
    }

    const findPerson = await prisma.pessoa.findUnique({
      where: { id: personId },
    });

    if (!findPerson) {
      throw new AppError(`Não existe usuário de id: ${personId}`, 400);
    }

    const postPessoaTelefoneUseCase = new PostPessoaTelefoneUseCase();
    try {
      const result = await postPessoaTelefoneUseCase.execute(req.body);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new AppError("Telefone já existe", 500);
        }
      }
      throw new AppError("Erro inesperado", 500);
    }
  }
}
