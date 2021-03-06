import awilix from 'awilix';
const { asValue } = awilix;
// import DataSourceFactory from './database/DataSourceFactory';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

export default class Application {
  constructor() {
    this.container = null;
  }

  /**
   * initialize application
   */
  async createContainer() {
    this.container = awilix.createContainer();

    const prisma = new PrismaClient();

    // register currentUser, datasource, prisma
    this.container.register({
      currentUser: asValue(process.env.USER),
      // dataSource: asFunction(DataSourceFactory),
      prisma: asValue(prisma)
    });

    // autoscan modules
    await this.container.loadModules(
      [
        'src/core/repositories/**/*.mjs',
        'src/core/services/**/*.mjs',
        'src/core/usecases/**/*.mjs',
        'src/app/repositories/**/*.mjs',
        'src/app/services/**/*.mjs',
        'src/app/usecases/**/*.mjs'
      ],
      {
        formatName: 'camelCase',
        esModules: true
      }
    );
  }

  /**
   * create scope for http request
   * @param {*} req
   */
  async createScope(req) {
    if (this.container == null) {
      await this.createContainer();
    }
    // console.log(this.container);

    const xRemoteUser = req && req.headers && req.headers['x-remote-user'];
    const currentUser = xRemoteUser || process.env.USER;

    const scope = this.container.createScope();
    scope.register({ currentUser: asValue(currentUser) });

    return scope;
  }

  /**
   * resolve bean by name
   * @param {*} name name of bean
   */
  resolve(name) {
    return this.container.resolve(name);
  }
}
