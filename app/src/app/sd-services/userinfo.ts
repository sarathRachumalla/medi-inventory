/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
//CORE_REFERENCE_IMPORTS
import { SDBaseService } from '../../app/n-services/SDBaseService';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
//append_imports_start

//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class userinfo {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  //   service flows_userinfo

  async userDetails(...others) {
    try {
      var bh = {
        input: {},
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_z1sPEbbdSlapUWjm(bh);
      //appendnew_next_userDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LJNeESvlXg4XCn59');
    }
  }

  //appendnew_flow_userinfo_Start

  async sd_z1sPEbbdSlapUWjm(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/user/info',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_z1sPEbbdSlapUWjm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z1sPEbbdSlapUWjm');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_userinfo_Catch
}
