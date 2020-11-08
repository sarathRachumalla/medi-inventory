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

//append_imports_end

export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_fv5ARsmVMfKARRie(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XNet6LuWPVqD0XcY');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_J9FKI4OnQLdV7R8q(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dPk8IkT3nSJmho6h');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_MATW4bXxlzjE31gY(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TQx1HbIu2hnOQpH6');
    }
  }

  //appendnew_flow_idsutil_Start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_fv5ARsmVMfKARRie(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_7CDI9TVt075Yy0mz(bh);
      //appendnew_next_sd_fv5ARsmVMfKARRie
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fv5ARsmVMfKARRie');
    }
  }

  async sd_7CDI9TVt075Yy0mz(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_A5x7Nh4n7aqit6Hk(bh);
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
        bh = await this.sd_gG1MrkM5ktkvojVz(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7CDI9TVt075Yy0mz');
    }
  }

  async sd_A5x7Nh4n7aqit6Hk(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret']
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_pdHmP6rshRkO78fF(bh);
      //appendnew_next_sd_A5x7Nh4n7aqit6Hk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A5x7Nh4n7aqit6Hk');
    }
  }

  async sd_pdHmP6rshRkO78fF(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_pdHmP6rshRkO78fF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pdHmP6rshRkO78fF');
    }
  }

  async sd_gG1MrkM5ktkvojVz(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_gG1MrkM5ktkvojVz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gG1MrkM5ktkvojVz');
    }
  }

  async sd_J9FKI4OnQLdV7R8q(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent'
      };
      //appendnew_next_sd_J9FKI4OnQLdV7R8q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J9FKI4OnQLdV7R8q');
    }
  }

  async sd_MATW4bXxlzjE31gY(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_KAkbXfZCzNqkpICE(bh);
      //appendnew_next_sd_MATW4bXxlzjE31gY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MATW4bXxlzjE31gY');
    }
  }

  async sd_KAkbXfZCzNqkpICE(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mlZaVLUNu5O4vSE5(bh);
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
        bh = await this.sd_pDR4eL5MBLVUj9We(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KAkbXfZCzNqkpICE');
    }
  }

  async sd_mlZaVLUNu5O4vSE5(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_mlZaVLUNu5O4vSE5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mlZaVLUNu5O4vSE5');
    }
  }

  async sd_pDR4eL5MBLVUj9We(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_aGqTfQsGj3tWUuVg(bh);
      //appendnew_next_sd_pDR4eL5MBLVUj9We
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pDR4eL5MBLVUj9We');
    }
  }

  async sd_aGqTfQsGj3tWUuVg(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_ojLGaHspGekIibfF(bh);
      //appendnew_next_sd_aGqTfQsGj3tWUuVg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aGqTfQsGj3tWUuVg');
    }
  }

  async sd_ojLGaHspGekIibfF(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_30hp0f0aHGV3vYnz(bh);
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
        bh = await this.sd_SZT8r89vr5TFWk5f(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ojLGaHspGekIibfF');
    }
  }

  async sd_30hp0f0aHGV3vYnz(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_30hp0f0aHGV3vYnz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_30hp0f0aHGV3vYnz');
    }
  }

  async sd_SZT8r89vr5TFWk5f(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_SZT8r89vr5TFWk5f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SZT8r89vr5TFWk5f');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_U0z3ZhqcBzGVeOlV(bh))
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
  async sd_U0z3ZhqcBzGVeOlV(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_SZT8r89vr5TFWk5f(bh);
      //appendnew_next_sd_U0z3ZhqcBzGVeOlV
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
