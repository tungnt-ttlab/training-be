import Joi from 'joi';
import ConfigKey from './config-key';
import { DEFAULT_PORT, NodeEnv } from '../constants';

export default Joi.object({
    [ConfigKey.NODE_ENV]: Joi.string().valid(...Object.values(NodeEnv)),
    [ConfigKey.PORT]: Joi.number().default(DEFAULT_PORT),
    [ConfigKey.VERSION]: Joi.string().required(),
    [ConfigKey.BASE_PATH]: Joi.string().required(),
    [ConfigKey.CORS_WHITELIST]: Joi.string().required(),
    [ConfigKey.TIMEZONE_DEFAULT_NAME]: Joi.string().required(),

    [ConfigKey.MONGO_DATABASE_CONNECTION_STRING]: Joi.string().required(),

    [ConfigKey.SWAGGER_ENABLED]: Joi.boolean().default(false),
});
