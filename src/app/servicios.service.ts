import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { login, Empleado } from './interfaces';

const UrlApi = 'https://localhost:44358/POLI/Api/'
@Injectable()
export class serviciosServices
{
    Login?:login;
  
    constructor(private http: HttpClient) { }
    public getLogin(correo:string):Observable<login>
    {
        const Url=`${UrlApi}login?correo=${encodeURIComponent(correo)}`;
        return this.http.get<login>(Url).pipe(
                map((data) =>(this.Login= data))
        )
    }
    getlogins(){
        return this.Login;
    }
}