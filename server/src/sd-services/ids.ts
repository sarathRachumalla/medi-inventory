import { SDBaseService } from '../services/SDBaseService';
import * as httpStatusCodes from 'http-status-codes';
import { Middleware } from '../middleware/Middleware';
import log from '../utils/Logger';
import * as cookieParser from 'cookie-parser';
import { Readable } from 'stream';
import { setInterval } from 'timers';
import * as settings from '../config/config';
import { Issuer, custom } from 'openid-client';
import * as crypto from 'crypto';
import * as url from 'url';

let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { idsutil } from './idsutil'; //_splitter_
//append_imports_end

export class ids {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = `${this.app.settings.base}`;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_wxUbkDcdi4EVFFvp(bh);
          //appendnew_next_sd_zoTroEjOCQM0PP1e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zoTroEjOCQM0PP1e');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_bx50mXCzbMcFdX9E(bh);
          //appendnew_next_sd_nuiKaLTY9dB6wYme
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nuiKaLTY9dB6wYme');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_Owgy3F8f7DbYAXm8(bh);
          //appendnew_next_sd_NbU60r3tV5nDuIPb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NbU60r3tV5nDuIPb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_t67nT54Qf4mbyuXb(bh);
          //appendnew_next_sd_qLPCZLcLt2oIYND8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qLPCZLcLt2oIYND8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_CSh25786IrSSJqlf(bh);
          //appendnew_next_sd_zJlXsGxDxmMb8pBT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zJlXsGxDxmMb8pBT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_HKqROO5cD0NHDqng(bh);
          //appendnew_next_sd_jP7aeQZFZRg7svoZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jP7aeQZFZRg7svoZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_xZsFRTeuYh2PJ2T0(bh);
          //appendnew_next_sd_iDSW6QsMHIOFM9tE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iDSW6QsMHIOFM9tE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_Start

  async sd_Owgy3F8f7DbYAXm8(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_2mwAjPJDYd141KN7(bh);
      //appendnew_next_sd_Owgy3F8f7DbYAXm8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Owgy3F8f7DbYAXm8');
    }
  }

  async sd_2mwAjPJDYd141KN7(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bSocwDzpWdQHrMTR(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Ic6A6hsRZJoBhTDw(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2mwAjPJDYd141KN7');
    }
  }

  async sd_bSocwDzpWdQHrMTR(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo
      };
      bh = await this.sd_lQUhCdJtYeyleTO1(bh);
      //appendnew_next_sd_bSocwDzpWdQHrMTR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bSocwDzpWdQHrMTR');
    }
  }

  async sd_lQUhCdJtYeyleTO1(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_4Cz4UGzHPSnXT9e0(bh);
      //appendnew_next_sd_lQUhCdJtYeyleTO1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lQUhCdJtYeyleTO1');
    }
  }

  async sd_4Cz4UGzHPSnXT9e0(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_ChbBLBzMhmCkrfts(bh);
      //appendnew_next_sd_4Cz4UGzHPSnXT9e0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4Cz4UGzHPSnXT9e0');
    }
  }

  async sd_ChbBLBzMhmCkrfts(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getAuthorizationParams(null);
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_FO8XCRwVJpu5b60d(bh);
      //appendnew_next_sd_ChbBLBzMhmCkrfts
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ChbBLBzMhmCkrfts');
    }
  }

  async sd_FO8XCRwVJpu5b60d(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0]
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest)
      };

      await this.sd_fMhPTWWzTbRsfjeN(bh);
      //appendnew_next_sd_FO8XCRwVJpu5b60d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FO8XCRwVJpu5b60d');
    }
  }

  async sd_fMhPTWWzTbRsfjeN(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fMhPTWWzTbRsfjeN');
    }
  }

  async sd_Ic6A6hsRZJoBhTDw(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again'
      };
      await this.sd_VH7pVWsv1qc23gIt(bh);
      //appendnew_next_sd_Ic6A6hsRZJoBhTDw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ic6A6hsRZJoBhTDw');
    }
  }

  async sd_VH7pVWsv1qc23gIt(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VH7pVWsv1qc23gIt');
    }
  }

  async sd_wxUbkDcdi4EVFFvp(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_j20ub0uB4Vke8w3q(bh);
      //appendnew_next_sd_wxUbkDcdi4EVFFvp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wxUbkDcdi4EVFFvp');
    }
  }

  async sd_j20ub0uB4Vke8w3q(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j20ub0uB4Vke8w3q');
    }
  }

  async sd_t67nT54Qf4mbyuXb(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_9H0AmFXI1QRHtvWD(bh);
      //appendnew_next_sd_t67nT54Qf4mbyuXb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t67nT54Qf4mbyuXb');
    }
  }

  async sd_9H0AmFXI1QRHtvWD(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_r6c3nPn6lKuyhO17(bh);
      //appendnew_next_sd_9H0AmFXI1QRHtvWD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9H0AmFXI1QRHtvWD');
    }
  }

  async sd_r6c3nPn6lKuyhO17(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token'])
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_u1e1hiu1iA5oZPCC(bh);
      //appendnew_next_sd_r6c3nPn6lKuyhO17
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r6c3nPn6lKuyhO17');
    }
  }

  async sd_u1e1hiu1iA5oZPCC(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_sQorT2Fw9UrB9jBh(bh);
      //appendnew_next_sd_u1e1hiu1iA5oZPCC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u1e1hiu1iA5oZPCC');
    }
  }

  async sd_sQorT2Fw9UrB9jBh(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_12xqb73wGPDDlZf0(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_q7yZ66ssMiy2DN0P(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sQorT2Fw9UrB9jBh');
    }
  }

  async sd_12xqb73wGPDDlZf0(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_s8qzCaaRiW5o1TxZ(bh);
      //appendnew_next_sd_12xqb73wGPDDlZf0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_12xqb73wGPDDlZf0');
    }
  }

  async sd_s8qzCaaRiW5o1TxZ(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s8qzCaaRiW5o1TxZ');
    }
  }

  async sd_q7yZ66ssMiy2DN0P(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo
      };
      await this.sd_koWMr56EpVBLgflO(bh);
      //appendnew_next_sd_q7yZ66ssMiy2DN0P
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q7yZ66ssMiy2DN0P');
    }
  }

  async sd_koWMr56EpVBLgflO(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_koWMr56EpVBLgflO');
    }
  }

  async sd_CSh25786IrSSJqlf(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_Ujtsk5FI9oYH8qio(bh);
      //appendnew_next_sd_CSh25786IrSSJqlf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CSh25786IrSSJqlf');
    }
  }

  async sd_Ujtsk5FI9oYH8qio(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ujtsk5FI9oYH8qio');
    }
  }

  async sd_8lndWgOYi7fdiSlC(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_8lndWgOYi7fdiSlC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8lndWgOYi7fdiSlC');
    }
  }

  async sd_HKqROO5cD0NHDqng(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_sZVt8aPP6sJaq6zl(bh);
      //appendnew_next_sd_HKqROO5cD0NHDqng
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HKqROO5cD0NHDqng');
    }
  }

  async sd_sZVt8aPP6sJaq6zl(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_ptDP2AgXwud8NFVZ(bh);
      //appendnew_next_sd_sZVt8aPP6sJaq6zl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sZVt8aPP6sJaq6zl');
    }
  }

  async sd_ptDP2AgXwud8NFVZ(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_vXMKBPTKQFyNDqtc(bh);
      //appendnew_next_sd_ptDP2AgXwud8NFVZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ptDP2AgXwud8NFVZ');
    }
  }

  async sd_vXMKBPTKQFyNDqtc(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_adtaN2jGi8obn4Fj(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Fn56bHs3zRcG9hta(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vXMKBPTKQFyNDqtc');
    }
  }

  async sd_adtaN2jGi8obn4Fj(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id']
              }
            }
          )
        ),
        sessionExists: true
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_adtaN2jGi8obn4Fj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_adtaN2jGi8obn4Fj');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_dOV9H2yA0HDLc96J(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_dOV9H2yA0HDLc96J(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dOV9H2yA0HDLc96J');
    }
  }

  async sd_Fn56bHs3zRcG9hta(bh) {
    try {
      bh.local.res = {
        sessionExists: false
      };
      await this.sd_dOV9H2yA0HDLc96J(bh);
      //appendnew_next_sd_Fn56bHs3zRcG9hta
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fn56bHs3zRcG9hta');
    }
  }

  async sd_xZsFRTeuYh2PJ2T0(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_Lt4MrVNfGfCldQkh(bh);
      //appendnew_next_sd_xZsFRTeuYh2PJ2T0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xZsFRTeuYh2PJ2T0');
    }
  }

  async sd_Lt4MrVNfGfCldQkh(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_7HSyDbyDSNj1Msb4(bh);
      //appendnew_next_sd_Lt4MrVNfGfCldQkh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lt4MrVNfGfCldQkh');
    }
  }

  async sd_7HSyDbyDSNj1Msb4(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_M1oeaJQ53qPFslNE(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wgqj19PcvuxbW9iY(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7HSyDbyDSNj1Msb4');
    }
  }

  async sd_M1oeaJQ53qPFslNE(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_wihes2HnaIeq52Lz(bh);
      //appendnew_next_sd_M1oeaJQ53qPFslNE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M1oeaJQ53qPFslNE');
    }
  }

  async sd_wihes2HnaIeq52Lz(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wihes2HnaIeq52Lz');
    }
  }

  async sd_wgqj19PcvuxbW9iY(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo
      };
      await this.sd_QSR7wTTs8OXkkhoE(bh);
      //appendnew_next_sd_wgqj19PcvuxbW9iY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wgqj19PcvuxbW9iY');
    }
  }

  async sd_QSR7wTTs8OXkkhoE(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QSR7wTTs8OXkkhoE');
    }
  }

  async sd_bx50mXCzbMcFdX9E(bh) {
    try {
      bh.local = {};
      bh = await this.sd_hrBu3QzXQuay5XpM(bh);
      //appendnew_next_sd_bx50mXCzbMcFdX9E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bx50mXCzbMcFdX9E');
    }
  }

  async sd_hrBu3QzXQuay5XpM(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_fQfQUIRSgyebR7FA(bh);
      //appendnew_next_sd_hrBu3QzXQuay5XpM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hrBu3QzXQuay5XpM');
    }
  }

  async sd_fQfQUIRSgyebR7FA(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_TxOh9QnsM2mbipZR(bh);
      //appendnew_next_sd_fQfQUIRSgyebR7FA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fQfQUIRSgyebR7FA');
    }
  }

  async sd_TxOh9QnsM2mbipZR(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Lp6UFbMME12lgYyl(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WZMGV3mLPanuyNyK(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TxOh9QnsM2mbipZR');
    }
  }

  async sd_Lp6UFbMME12lgYyl(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_p9KR8Sv2CWvz6WKv(bh);
      //appendnew_next_sd_Lp6UFbMME12lgYyl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lp6UFbMME12lgYyl');
    }
  }

  async sd_p9KR8Sv2CWvz6WKv(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_b4D7oFLcK6QgtI2i(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tJ3ell1NxZ82qeVi(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p9KR8Sv2CWvz6WKv');
    }
  }

  async sd_b4D7oFLcK6QgtI2i(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_q3v2OT4wSk10Vbuc(bh);
      //appendnew_next_sd_b4D7oFLcK6QgtI2i
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b4D7oFLcK6QgtI2i');
    }
  }

  async sd_q3v2OT4wSk10Vbuc(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked'
      };
      await this.sd_DCsDShwWCvFtF9WH(bh);
      //appendnew_next_sd_q3v2OT4wSk10Vbuc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q3v2OT4wSk10Vbuc');
    }
  }

  async sd_DCsDShwWCvFtF9WH(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DCsDShwWCvFtF9WH');
    }
  }

  async sd_tJ3ell1NxZ82qeVi(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rVbDd7WPvDSaFsGf(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jNCcjQbB1xHx0jpl(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tJ3ell1NxZ82qeVi');
    }
  }

  async sd_rVbDd7WPvDSaFsGf(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_ISLMaU73cT9Et40g(bh);
      //appendnew_next_sd_rVbDd7WPvDSaFsGf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rVbDd7WPvDSaFsGf');
    }
  }

  async sd_ISLMaU73cT9Et40g(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_jNCcjQbB1xHx0jpl(bh);
      //appendnew_next_sd_ISLMaU73cT9Et40g
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ISLMaU73cT9Et40g');
    }
  }

  async sd_jNCcjQbB1xHx0jpl(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jNCcjQbB1xHx0jpl');
    }
  }

  async sd_WZMGV3mLPanuyNyK(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_3t8rZaX0ckhgkSQs(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EWYVZn9ptcW5RYpo(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WZMGV3mLPanuyNyK');
    }
  }

  async sd_3t8rZaX0ckhgkSQs(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_DCsDShwWCvFtF9WH(bh);
      //appendnew_next_sd_3t8rZaX0ckhgkSQs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3t8rZaX0ckhgkSQs');
    }
  }

  async sd_EWYVZn9ptcW5RYpo(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_DCsDShwWCvFtF9WH(bh);
      //appendnew_next_sd_EWYVZn9ptcW5RYpo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EWYVZn9ptcW5RYpo');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_wC6jllNAGK43nLUx(bh)) ||
      (await this.sd_Oj4U7jMfHDTRIJrZ(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_wC6jllNAGK43nLUx(bh) {
    const nodes = [
      'sd_ChbBLBzMhmCkrfts',
      'sd_qLPCZLcLt2oIYND8',
      'sd_9H0AmFXI1QRHtvWD',
      'sd_r6c3nPn6lKuyhO17',
      'sd_t67nT54Qf4mbyuXb',
      'sd_sQorT2Fw9UrB9jBh',
      'sd_12xqb73wGPDDlZf0',
      'sd_q7yZ66ssMiy2DN0P',
      'sd_s8qzCaaRiW5o1TxZ',
      'sd_koWMr56EpVBLgflO'
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8lndWgOYi7fdiSlC(bh);
      //appendnew_next_sd_wC6jllNAGK43nLUx
      return true;
    }
    return false;
  }
  async sd_Oj4U7jMfHDTRIJrZ(bh) {
    const nodes = ['sd_Lp6UFbMME12lgYyl'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_q3v2OT4wSk10Vbuc(bh);
      //appendnew_next_sd_Oj4U7jMfHDTRIJrZ
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
