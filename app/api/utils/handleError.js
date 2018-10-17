/* eslint-disable prefer-template */
import debugLog from 'api/log/debugLog';
import errorLog from 'api/log/errorLog';

export default (error, { req = {}, uncaught = false } = {}) => {
  let result = error;
  const responseToClientError = error.json;

  if (error instanceof Error) {
    result = { code: 500, message: error.stack };
  }

  if (responseToClientError) {
    result = { code: error.status || 500, message: error.json.error };
  }

  if (error.name === 'MongoError') {
    result.code = 500;
  }

  if (uncaught) {
    result.message = `uncaught exception or unhandled rejection, Node process finished !!\n ${result.message}`;
  }


  const errorMessage = (req.originalUrl ? `\nurl: ${req.originalUrl}` : '') +
      (req.body && Object.keys(req.body).length ? `\nbody: ${JSON.stringify(req.body, null, ' ')}` : '') +
      (req.query && Object.keys(req.query).length ? `\nquery: ${JSON.stringify(req.query, null, ' ')}` : '') +
      `\n${result.message}`;

  if (result.code === 500) {
    errorLog.error(errorMessage);
  }

  if (result.code !== 500) {
    debugLog.debug(errorMessage);
  }

  return result;
};
