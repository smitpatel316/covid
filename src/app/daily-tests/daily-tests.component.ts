import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-tests",
  templateUrl: "./daily-tests.component.html",
  styleUrls: ["./daily-tests.component.css"],
})
export class DailyTestsComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges(): void {
    this.dailyTests();
  }
  ngOnInit(): void {
    this.dailyTests();
  }
  dailyTests() {
    this.api.getDailyTestings(this.region).subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Tests", series: responseData }];
      this.options.yAxisLabel = "Tests";
    });
  }
}
