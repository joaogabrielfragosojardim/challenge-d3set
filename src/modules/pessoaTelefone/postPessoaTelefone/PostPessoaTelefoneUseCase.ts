import { prisma } from "../../../prisma/client";

export class PostPessoaTelefoneUseCase {
  async execute(body: { phone: string; personId: string }) {
    const { phone, personId } = body;

    await prisma.pessoa.update({
      where: { id: personId },
      data: {
        phoneQuantity: { increment: 1 },
        updatedAt: new Date(),
      },
    });

    const phoneCreated = await prisma.pessoaTelefone.create({
      data: {
        phone,
        personId,
      },
      select: {
        id: true,
        phone: true,
      },
    });

    return phoneCreated;
  }
}
