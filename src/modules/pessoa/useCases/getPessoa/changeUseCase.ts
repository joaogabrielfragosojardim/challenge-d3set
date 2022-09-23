import { prisma } from "../../../../prisma/client";

export class GetPessoaUseCase {
  async execute(phoneQuantity: number | undefined) {
    const valueGT = phoneQuantity ? phoneQuantity - 1 : -1;
    const pessoa = await prisma.pessoa.findMany({
      orderBy: [{ name: "asc" }],
      where: {
        phoneQuantity: {
          gt: valueGT,
        },
      },
      select: {
        id: true,
        name: true,
        phoneQuantity: true,
        birthday: true,
      },
    });

    return pessoa;
  }
}
