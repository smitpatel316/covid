import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ApiService } from "../api.service";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"],
})
export class InfoComponent implements OnInit, OnChanges {
  @Input("region") region: string;

  tiles: Tile[] = [
    { text: "", cols: 2, rows: 1, color: "#EBF5FB" },
    { text: "", cols: 2, rows: 1, color: "#D6DBDF" },
    { text: "", cols: 2, rows: 1, color: "#7DCEA0" },
    { text: "", cols: 2, rows: 1, color: "#E6B0AA" },
  ];
  constructor(private api: ApiService) {}

  ngOnChanges() {
    this.info();
  }

  ngOnInit(): void {
    this.info();
  }
  info() {
    this.api.getInfo(this.region).subscribe((response: Array<string>) => {
      for (let i = 0; i < response.length; i++) {
        this.tiles[i].text = response[i];
      }
    });
  }
}
