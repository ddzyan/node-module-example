const { getMethod } = require('./lib/axios-sdk');
const Instance = require('./lib/axios-init');

(async () => {
  const result = await getMethod('https://public.eosinfra.io/v1/chain/get_info');
  console.log(result);
})();

(async () => {
  const instance = new Instance({ baseURL: 'https://public.eosinfra.io' });
  const result = await instance.getMethod('/v1/chain/get_info');
  console.log(result);
})();
