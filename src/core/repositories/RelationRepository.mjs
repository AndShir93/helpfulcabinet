export default class RelationRepository {
  constructor({ prisma }) {
    this.prisma = prisma;
  }

  async findByCode(code) {
    const user = await this.prisma.relation.findUnique({
      where: {
        code
      }
    });
    return user;
  }

  async save(data) {
    // const res = await this.prisma.relation.create({
    //   data
    // });
    const res = await this.prisma.relation.upsert({
      where: {
        code: data.code
      },
      update: data,
      create: data
    });
    return res;
  }
}
