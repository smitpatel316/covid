import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private BACKEND = "https://smit-covid-backend.herokuapp.com/api/v1";
  getRegions() {
    return this.http.get(this.BACKEND);
  }
  getAllData(region) {
    this.http
      .get(`${this.BACKEND}/${region}`)
      .subscribe((response: Response) => {
        response["records"].forEach((element) => {
          console.log(element);
        });
      });
  }
  getDailyCases(region) {
    return this.http.get(`${this.BACKEND}/${region}/daily/cases`);
  }
  getDailyCasesRate(region) {
    return this.http.get(`${this.BACKEND}/${region}/daily/rate`);
  }
  getDailyActiveCases(region) {
    return this.http.get(`${this.BACKEND}/${region}/daily/active`);
  }
  getDailyTotalCases(region) {
    return this.http.get(`${this.BACKEND}/${region}/daily/total`);
  }
  getDailyRecoveries(region) {
    return this.http.get(`${this.BACKEND}/${region}/daily/recoveries`);
  }
  getInfo(region) {
    return this.http.get(`${this.BACKEND}/${region}/info`);
  }
}
