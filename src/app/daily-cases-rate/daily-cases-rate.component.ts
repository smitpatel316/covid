import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-cases-rate",
  templateUrl: "./daily-cases-rate.component.html",
  styleUrls: ["./daily-cases-rate.component.css"],
})
export class DailyCasesRateComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  public data = [];
  public graphOptions = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges(): void {
    this.dailyCasesRate();
  }
  ngOnInit(): void {
    this.dailyCasesRate();
  }
  dailyCasesRate() {
    this.api.getDailyCasesRate(this.region).subscribe((response: Response) => {
      const responseData = [];
      this.graphOptions.colorScheme.domain = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
        if (response[element] > 0) {
          // Red
          this.graphOptions.colorScheme.domain.push("#C70039");
        } else {
          // Green
          this.graphOptions.colorScheme.domain.push("#229954");
        }
      });
      this.data = responseData;
    });
  }
}
