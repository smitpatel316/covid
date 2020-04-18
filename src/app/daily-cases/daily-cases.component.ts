import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import * as globals from "../global";

@Component({
  selector: "app-daily-cases",
  templateUrl: "./daily-cases.component.html",
  styleUrls: ["./daily-cases.component.css"],
})
export class DailyCasesComponent implements OnInit {
  data = [];
  public options = globals.graphOptions;
  public loaderOptions = globals.loaderOptions;
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
