/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { userinfo } from 'app/sd-services/userinfo';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    userInfoDetails;

    constructor(private router: Router, private userinfo: userinfo, public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {
        // this.userinfo.userDetails().then(res => {
        //     console.log('result', res)
        //     this.userInfoDetails = res;
        // })

        this.userInfoDetails = this.neutrinosOAuthClientService.userInfo;
    }


    navigate(type) {
        this.router.navigate([`home/${type}`]);
    }
}
