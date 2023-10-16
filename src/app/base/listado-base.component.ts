import { ApiService     } from './api.service';
import { ConfirmService } from './confirm.service';
import { LocatorService } from './locator.service';
import { Router         } from '@angular/router';

export abstract class ListadoBaseComponent {

    public apiService     = LocatorService.injector.get(ApiService    );
    public confirmService = LocatorService.injector.get(ConfirmService);
    public router         = LocatorService.injector.get(Router        );

}
