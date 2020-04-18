import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private BACKEND = "https://smit-covid-backend.herokuapp.com/";
  getAllData() {
    this.http.get(this.BACKEND + "canada").subscribe((response: Response) => {
      response["records"].forEach((element) => {
        console.log(element);
      });
    });
  }
  getDailyCases() {
    return this.http.get(this.BACKEND + "canada/daily/cases");
  }
  getDailyCasesRate() {
    return this.http.get(this.BACKEND + "canada/daily/rate");
  }
  getDailyActiveCases() {
    return this.http.get(this.BACKEND + "canada/daily/active");
  }
}
