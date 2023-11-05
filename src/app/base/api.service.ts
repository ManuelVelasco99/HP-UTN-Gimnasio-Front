import { AuthService       } from './auth.service';
import { catchError        } from 'rxjs/operators';
import { environment       } from '../../environments/environment';
import { HttpClient        } from '@angular/common/http';
import { HttpHeaders       } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable        } from '@angular/core';
import { lastValueFrom     } from 'rxjs';
import { NgModule          } from '@angular/core';
import { Observable        } from 'rxjs/internal/Observable';
import { Router            } from '@angular/router';
import { throwError        } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
@NgModule()
export class ApiService {

  	constructor(
		private http   : HttpClient,
        private router : Router
	) { }

	public url = environment.apiUrl;


    public get(uri: string, params: any = {}): Observable<any> {
        return this.handle(
            this.http.get(
                this.url + uri,
                {
                    observe: 'body',
                    headers : new HttpHeaders({
                        'access-token': localStorage.getItem("access-token") || "",
                    })
                }, 
            )
        );
    }

	public async getData(uri: string, params: any = {}) : Promise<any> {
		let response = await lastValueFrom(this.get(uri, params));
        return response.data;
	}

    public post(uri: string, body: any): Promise<any> {
        return lastValueFrom(this.handle(
            this.http.post(
                this.url + uri,
                //this.getEncodedBody(body),
                body,
                {
                    headers  : new HttpHeaders({
                        'access-token': localStorage.getItem("access-token") || "",
                    })
                }
            )
        ));
    }

    /*private getEncodedBody(data: any): any {
        return (new QsSerializer)
            .serialize(data)
            .filter(v => v.value instanceof File)
            .length > 0 ?
                this.getEncodedBodyWithFile(data) :
                data;
    }*/

	private handle(o: Observable<any>): Observable<ArrayBuffer> {
        return o.pipe(catchError((e: HttpErrorResponse)=> {
            if ([403,404,422].includes(e.status)){
                //this.snackBar.show(e.error.message||e.error.error);
				//alert(e.error.message||e.error.error);
            }
            if (e.status === 403) {
                AuthService.removeToken();
                this.router.navigate(["/auth/login"]);
            }
            return throwError(e);
        }));
    }

}
