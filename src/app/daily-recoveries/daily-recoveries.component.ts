import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-recoveries",
  templateUrl: "./daily-recoveries.component.html",
  styleUrls: ["./daily-recoveries.component.css"],
})
export class DailyRecoveriesComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges(): void {
    this.dailyRecoveries();
  }
  ngOnInit(): void {
    this.dailyRecoveries();
  }
  dailyRecoveries() {
    this.api.getDailyRecoveries(this.region).subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
    });
  }
}
