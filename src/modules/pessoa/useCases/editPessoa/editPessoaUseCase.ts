import { prisma } from "../../../../prisma/client";

interface Request {
  id: string;
  name: string;
  birthday: Date;
  phones: { id: string; phone: string }[];
}

export class EditPessoaUseCase {
  async execute({ id, name, birthday, phones }: Request) {
    const pessoa = await prisma.pessoa.update({
      where: { id: id },
      data: { name, birthday, phoneQuantity: phones.length },
    });

    const createdPhones = await Promise.all(
      phones.map(async (phone) => {
        const data = await prisma.pessoaTelefone.update({
          where: { id: phone.id },
          data: {
            personId: pessoa.id,
            phone: phone.phone,
          },
        });

        return data;
      })
    );

    return { ...pessoa, phones: createdPhones };
  }
}
