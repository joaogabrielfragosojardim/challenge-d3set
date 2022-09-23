import { prisma } from "../../../../prisma/client";
interface Request {
  name: string;
  birthday: Date;
  phoneQuantity: number;
  phones: string[];
}

export class CreatePessoaUseCase {
  async execute({ name, birthday, phoneQuantity, phones }: Request) {
    const pessoa = await prisma.pessoa.create({
      data: { name, birthday, phoneQuantity },
    });
    const createdPhones = await Promise.all(
      phones.map(async (phone) => {
        const data = await prisma.pessoaTelefone.create({
          data: {
            personId: pessoa.id,
            phone,
          },
        });

        return data;
      })
    );

    return { ...pessoa, phones: createdPhones };
  }
}
