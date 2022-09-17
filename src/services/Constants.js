export const ENV = Object.assign(
  {},
  require('../config/env/default.js').default,
);

export const {
  API_URL: API_ENDPOINT,
} = ENV;
