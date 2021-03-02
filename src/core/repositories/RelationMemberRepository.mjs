export default class RelationMemberRepository {
  constructor({ prisma }) {
    this.prisma = prisma;
  }

  /**
   * Получить участников отношения
   * @param relationId идентификатор отношения
   * @param includeUser флаг "включать пользователей в ответ"
   */
  async findByRelationId(relationId, includeUser) {
    const relationmember = await this.prisma.relationmember.findMany({
      where: {
        relationId
      },
      include: {
        user: includeUser
      }
    });
    return relationmember;
  }

  async save(data) {
    // const res = await this.prisma.relation.create({
    //   data
    // });
    const res = await this.prisma.relationmember.upsert({
      where: {
        relationId: data.relationId,
        userId: data.userId
      },
      update: data,
      create: data
    });
    return res;
  }
}
