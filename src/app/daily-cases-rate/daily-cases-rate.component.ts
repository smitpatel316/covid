import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-cases-rate",
  templateUrl: "./daily-cases-rate.component.html",
  styleUrls: ["./daily-cases-rate.component.css"],
})
export class DailyCasesRateComponent implements OnInit {
  data = [];
  public options = globals.graphOptions;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getDailyCases().subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
    });
  }
}
