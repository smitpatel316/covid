import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";
@Component({
  selector: "app-daily-cases-active",
  templateUrl: "./daily-cases-active.component.html",
  styleUrls: ["./daily-cases-active.component.css"],
})
export class DailyCasesActiveComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges(): void {
    this.dailyActiveCases();
  }
  ngOnInit(): void {
    this.dailyActiveCases();
  }
  dailyActiveCases() {
    this.api
      .getDailyActiveCases(this.region)
      .subscribe((response: Response) => {
        const responseData = [];
        Object.keys(response).forEach((element) => {
          responseData.push({ name: element, value: response[element] });
        });
        this.data = [{ name: "Cases", series: responseData }];
      });
  }
}
