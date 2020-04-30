import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-cases",
  templateUrl: "./daily-cases.component.html",
  styleUrls: ["./daily-cases.component.css"],
})
export class DailyCasesComponent implements OnInit, OnChanges {
  @Input("region") region: string;
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
  constructor(private api: ApiService) {}
  ngOnChanges(): void {
    this.dailyCases();
  }
  ngOnInit(): void {
    this.dailyCases();
  }
  dailyCases() {
    this.api.getDailyCases(this.region).subscribe((response: Response) => {
      const responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
    });
  }
}
