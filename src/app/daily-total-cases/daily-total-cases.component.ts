import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-total-cases",
  templateUrl: "./daily-total-cases.component.html",
  styleUrls: ["./daily-total-cases.component.css"],
})
export class DailyTotalCasesComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges() {
    this.totalCases();
  }
  ngOnInit(): void {
    this.totalCases();
  }
  totalCases() {
    this.api.getDailyTotalCases(this.region).subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
    });
  }
}
