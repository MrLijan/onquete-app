import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public async get(path: string) {
    return this.http.get(path);
  }

  public async post(path: string, payload: any) {
    return this.http.post(path, payload);
  }

  public async patch(path: string, payload: any) {
    return this.http.patch(path, payload);
  }

  public async delete(path: string, payload: any) {
    return this.http.delete(path, payload);
  }

  public async put(path: string, payload: any) {
    return this.http.put(path, payload);
  }
}
