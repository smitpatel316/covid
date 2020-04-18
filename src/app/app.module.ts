import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DailyCasesComponent } from "./daily-cases/daily-cases.component";
import { DailyCasesRateComponent } from "./daily-cases-rate/daily-cases-rate.component";
import { DailyCasesActiveComponent } from './daily-cases-active/daily-cases-active.component';
@NgModule({
  declarations: [AppComponent, DailyCasesComponent, DailyCasesRateComponent, DailyCasesActiveComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
