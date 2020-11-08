/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-inventory',
    templateUrl: './inventory.template.html'
})

export class inventoryComponent extends NBaseComponent implements OnInit {

    items = [{
        "name": "Rantac",
        "noOfClients": 10,
        "prePurOrder": 1222

    }]

    hospital = [
        {
            "name": "Paracetamol",
            "noOfClients": 10,
            "prePurOrder": 12

        },
        {
            "name": "Panadol",
            "noOfClients": 4,
            "prePurOrder": 10

        },
        {
            "name": "Perinorm",
            "noOfClients": 3,
            "prePurOrder": 62

        },
        {
            "name": "Syringe",
            "noOfClients": 12,
            "prePurOrder": 12

        },
        {
            "name": "Needle",
            "noOfClients": 4,
            "prePurOrder": 138

        },

        {
            "name": "Masks",
            "noOfClients": 7,
            "prePurOrder": 20

        },
        {
            "name": "Dipendol-M",
            "noOfClients": 14,
            "prePurOrder": 14

        },
        {
            "name": "Ciplox TZ",
            "noOfClients": 4,
            "prePurOrder": 80

        },
        {
            "name": "Pan-D",
            "noOfClients": 9,
            "prePurOrder": 233

        },
        {
            "name": "Thermometers",
            "noOfClients": 18,
            "prePurOrder": 122

        },

        {
            "name": "Band-aid",
            "noOfClients": 20,
            "prePurOrder": 522

        },
        {
            "name": "Savalon",
            "noOfClients": 14,
            "prePurOrder": 259

        }
    ]
    supplier = [
        {
            "name": "Paracetamol",
            "noOfClients": 10,
            "prePurOrder": 1222

        },
        {
            "name": "Panadol",
            "noOfClients": 4,
            "prePurOrder": 1000

        },
        {
            "name": "Perinorm",
            "noOfClients": 3,
            "prePurOrder": 622

        },
        {
            "name": "Syringe",
            "noOfClients": 12,
            "prePurOrder": 1342

        },
        {
            "name": "Needle",
            "noOfClients": 4,
            "prePurOrder": 3232

        },

        {
            "name": "Masks",
            "noOfClients": 7,
            "prePurOrder": 2006

        },
        {
            "name": "Dipendol-M",
            "noOfClients": 14,
            "prePurOrder": 1342

        },
        {
            "name": "Ciplox TZ",
            "noOfClients": 4,
            "prePurOrder": 800

        },
        {
            "name": "Pan-D",
            "noOfClients": 9,
            "prePurOrder": 2063

        },
        {
            "name": "Thermometers",
            "noOfClients": 18,
            "prePurOrder": 1222

        },

        {
            "name": "Band-aid",
            "noOfClients": 20,
            "prePurOrder": 5272

        },
        {
            "name": "Savalon",
            "noOfClients": 14,
            "prePurOrder": 2759

        }
    ]
    constructor(public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
        this.items = this.hospital;
    }

    ngOnInit() {
        // console.log(this.neutrinosOAuthClientService.userInfo.teams)
    }


    calculate(item) {
        return (item * 11)
    }

    callToShow() {
        // console.log(this.neutrinosOAuthClientService.userInfo.teams)
        let teams = this.neutrinosOAuthClientService.userInfo.teams
        for (let i = 0; i < this.neutrinosOAuthClientService.userInfo.teams.length; i++) {
            // const element = array[i];
            if (teams[i].teamId == '9cb06f9e6044c000') {
                this.items = this.supplier;
                return true
            }
        }
        this.items = this.hospital;
        return false
    }

}



