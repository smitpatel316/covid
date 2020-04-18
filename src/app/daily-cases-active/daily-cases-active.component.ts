import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";
@Component({
  selector: "app-daily-cases-active",
  templateUrl: "./daily-cases-active.component.html",
  styleUrls: ["./daily-cases-active.component.css"],
})
export class DailyCasesActiveComponent implements OnInit {
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getDailyActiveCases().subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
    });
  }
}
