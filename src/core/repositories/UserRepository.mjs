export default class UserRepository {
  constructor({ prisma }) {
    this.prisma = prisma;
  }

  async findByCode(code) {
    const user = await this.prisma.user.findUnique({
      where: {
        code
      }
    });
    return user;
  }

  async save(data) {
    // const res = await this.prisma.user.create({
    //   data
    // });

    const res = await this.prisma.user.upsert({
      where: {
        code: data.code
      },
      update: data,
      create: data
    });
    return res;
  }
}
