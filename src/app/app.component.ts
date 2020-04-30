import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  selectedRegion = "Canada";
  regions = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getRegions().subscribe((response: any[]) => {
      this.regions = response;
    });
  }
  change(event) {
    if (event.isUserInput) {
      this.selectedRegion = event.source.value;
    }
  }
}
