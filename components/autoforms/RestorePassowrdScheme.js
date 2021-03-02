import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const restorePassowrdSchema = {
  title: 'Восстановить пароль',
  type: 'object',
  properties: {
    phone: { type: 'string', title: 'Телефон'},
    code: {type: 'string', title: 'Введите код'}
  },
  required: ['firstName', 'lastName'],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(restorePassowrdSchema, object) {
  const validator = ajv.compile(restorePassowrdSchema);

  return (model, object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(restorePassowrdSchema);

export const bridge = new JSONSchemaBridge(restorePassowrdSchema, schemaValidator);