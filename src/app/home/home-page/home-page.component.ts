import { Component     } from '@angular/core';
import { DeviceService } from 'src/app/base/device.service';

@Component({
    selector    : 'app-home-page',
    templateUrl : './home-page.component.html',
    styleUrls   : ['./home-page.component.scss']
})
export class HomePageComponent {

    constructor(public deviceService : DeviceService){

    }
}
