export default class RelationService {
  constructor({ relationRepository, userRespository, relationMemberRepository }) {
    this.relationRepository = relationRepository;
    this.userRespository = userRespository;
    this.relationMemberRepository = relationMemberRepository;
  }

  /**
   * Получить список отношений пользователя
   * @param userCode код пользователя
   */
  async getRelations(userCode) {
    return [{ code: 'testorg', name: 'Тестовая организация' }];
  }
  /**
   * Добавить пользователя в отношение по коду
   * @param relationCode код отношения
   * @param userCode код пользователя
   */
  async addUserByCode(relationCode, userCode) {
    const relation = await this.relationRepository.findByCode(relationCode);
    const user = await this.userRepository.findByCode(userCode);
    return await this.addUserById(relation.id, user.id);
  }
  /**
   * Добавить пользователя в отношение по идентификатору
   * @param relationId идетификатор отношения
   * @param userId идентификатор пользователя
   */
  addUserById(relationId, userId) {
    this.relationMemberRepository.save({ relationId, userId });
  }
}
