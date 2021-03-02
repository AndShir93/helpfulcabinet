import RelationRepository from '../RelationRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

afterAll(async () => {
  await prisma.$disconnect();
});
// console.log(config);

const repository = new RelationRepository({ prisma });

const relationCode = 'testrelation';

describe('create and find', () => {
  it('should save Relation', async () => {
    const data = { code: relationCode, name: 'Тестовая группа', type: 'GROUP' };
    const res = await repository.save(data);
    // console.log({ res });
    expect(res.name).toBe('Тестовая группа');
  });
  it('should find Relation', async () => {
    const res = await repository.findByCode(relationCode);
    // console.log({ res });
    expect(res.name).toBe('Тестовая группа');
  });
});
