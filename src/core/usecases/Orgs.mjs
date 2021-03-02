/**
 * Список органиаций
 */
export default class Orgs {
  constructor({ relationService, currentUser }) {
    this.relationService = relationService;
    this.currentUser = currentUser;
  }
  /**
   * process use case
   * @param {*} request input params
   */
  async process(request) {
    const relations = await this.relationProvider.getRelations(this.currentUser, 'ORG');
    return { relations };
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  async schema(request) {
    // const schema = {};
    // const relations = await this.relationProvider.getrelations(this.currentUser);
    const schema = {
      type: 'object',
      properties: {
        // relationCode: {
        //   title: 'Точка продаж',
        //   type: 'string',
        //   enum: relations.map((sp) => sp.name),
        //   options: []
        // }
      },
      required: ['relationCode']
    };
    // console.log({ schema });
    return schema;
  }
}
