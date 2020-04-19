import { Component, OnInit } from "@angular/core";
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
export class InfoComponent implements OnInit {
  tiles: Tile[] = [
    { text: "", cols: 2, rows: 1, color: "#EBF5FB" },
    { text: "", cols: 2, rows: 1, color: "#D6DBDF" },
    { text: "", cols: 2, rows: 1, color: "#7DCEA0" },
    { text: "", cols: 2, rows: 1, color: "#E6B0AA" },
  ];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getInfo().subscribe((response: Array<string>) => {
      for (let i = 0; i < response.length; i++) {
        this.tiles[i].text = response[i];
      }
    });
  }
}
