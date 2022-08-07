import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath: string = '';

  constructor(
    private http: HttpClient,
  ) { }

  public async get(path: string): Promise<Observable<any>> {
    return this.send('GET', path);
  }

  public async post(path: string, payload: Object): Promise<Observable<any>> {
    return this.send('POST', path, payload);
  }

  private async send(method: string, path: string, body: any = ''): Promise<Observable<any>> {
    const url = this.basePath + path;
    return this.http.request(method, url, body ?? undefined);
  }
}
