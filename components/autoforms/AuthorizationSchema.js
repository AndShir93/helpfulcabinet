import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    login: { type: 'string', title: 'Логин'},
    password: { type: 'string', title: 'Пароль' },
    check: {type: 'boolean', title: 'Запомнить'}
  },
  required: ['firstName', 'lastName'],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema, object) {
  const validator = ajv.compile(schema);

  return (model, object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);