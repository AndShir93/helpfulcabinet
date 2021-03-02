import UserRepository from '../UserRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

afterAll(async () => {
  await prisma.$disconnect();
});
// console.log(config);

const repository = new UserRepository({ prisma });

const userCode = 'testuser';

describe('create and find', () => {
  it('should save user', async () => {
    const data = { code: userCode, name: 'Тестов Иван Тестович' };
    const res = await repository.save(data);
    // console.log({ res });
    expect(res.name).toBe('Тестов Иван Тестович');
  });
  it('should find user', async () => {
    const res = await repository.findByCode(userCode);
    // console.log({ res });
    expect(res.name).toBe('Тестов Иван Тестович');
  });
});
