/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
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
    selector: 'bh-landing',
    templateUrl: './landing.template.html'
})

export class landingComponent extends NBaseComponent implements OnInit {

    constructor(private router: Router, private neutrinosOAuthClientService: NeutrinosOAuthClientService ) {
        super();
    }

    ngOnInit() {

    }

    login() {
        // this.router.navigate([`home/inventory`]);
        this.neutrinosOAuthClientService.login('home/inventory');
    }
}
