import { Injectable } from "@angular/core";
import { Survey } from "../types/survey.type";
import { ApiService } from "./api.service";


@Injectable({ providedIn: 'root' })
export class OnqueteApi {

  constructor(private api: ApiService) {
    this.api.setBasePath('http://localhost:5500/api/v1');
  }

  public createSurvey(payload: Survey) {
    return this.api.post('/create', payload);
  }


}
