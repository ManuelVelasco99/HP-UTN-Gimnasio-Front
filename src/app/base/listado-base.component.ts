import { ApiService     } from './api.service';
import { LocatorService } from './locator.service';

export abstract class ListadoBaseComponent {

    public    apiService = LocatorService.injector.get(ApiService    );

}
