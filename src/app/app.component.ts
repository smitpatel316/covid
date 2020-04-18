import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { element } from "protractor";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  data = [];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Date";
  showYAxisLabel = true;
  yAxisLabel = "Cases";
  timeline = true;

  colorScheme = {
    domain: ["#9370DB", "#87CEFA", "#FA8072", "#FF7F50", "#90EE90", "#9370DB"],
  };

  //pie
  showLabels = true;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getDailyCases().subscribe((response: Response) => {
      let responseData = [];
      Object.keys(response).forEach((element) => {
        responseData.push({ name: element, value: response[element] });
      });
      this.data = [{ name: "Cases", series: responseData }];
      console.log(response);
    });
  }
}
