import { prisma } from "../../../../prisma/client";

export class GetPessoaByIdUseCase {
  async execute(id: string) {
    const person = await prisma.pessoa.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        birthday: true,
      },
    });

    const phones = await prisma.pessoaTelefone.findMany({
      where: { personId: id },
      select: { phone: true, id: true },
    });

    return { ...person, phones };
  }
}
