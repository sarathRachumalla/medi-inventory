export default {
  logger: { level: 'debug', transport: ['file', 'console'] },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' }
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } }
  },
  ids: {
    client_id: 'pINmXscYNGbGjGZCo-AMA',
    client_secret:
      'V7MiOfHMoQwwlT-WBpknAB9VTYj7lOgQxmuE0Jrb8SN_F6PKDBO-fbZ-GiQ85A-T8PskhnJuIhZZZPy6YHOElg',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true
  }
};
