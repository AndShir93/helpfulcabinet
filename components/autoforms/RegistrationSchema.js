import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const registrationSchema = {
  title: 'Регистрация',
  type: 'object',
  properties: {
    phone: { type: 'string', title: 'Телефон'},
    name: {type: 'string', title: 'ФИО'},
    branchOffice: {type: 'string', title: 'ФИО'},
    email: {type: 'string', title: 'Адрес электронной почты'},
    password: {type: 'string', title: 'Пароль'}
  },
  required: ['firstName', 'lastName'],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(registrationSchema, object) {
  const validator = ajv.compile(registrationSchema);

  return (model, object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(registrationSchema);

export const bridge = new JSONSchemaBridge(registrationSchema, schemaValidator);