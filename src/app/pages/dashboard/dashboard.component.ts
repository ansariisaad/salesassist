import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexGrid, ApexStroke, ApexTooltip, ApexResponsive } from "ng-apexcharts";
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";
import { SharedModule } from '../../shared/shared.module'; // Ensure SharedModule includes NgApexchartsModule


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  colors: string[];
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, SidebarComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public profitChartOptions: Partial<ChartOptions> | any;
  public breakupChartOptions: Partial<ChartOptions> | any;
  public earningChartOptions: Partial<ChartOptions> | any;

  ngOnInit() {
    this.initProfitChart();
    this.initBreakupChart();
    this.initEarningChart();
  }

  initProfitChart() {
    this.profitChartOptions = {
      series: [
        { name: "Earnings this month", data: [355, 390, 300, 350, 390, 180, 355, 390] },
        { name: "Expense this month", data: [280, 250, 325, 215, 250, 310, 280, 250] }
      ],
      chart: {
        type: "bar",
        height: 352,
        toolbar: { show: true },
        foreColor: "#adb0bb",
        fontFamily: 'inherit',
      },
      colors: ["#3b86f7", "#90c7fe"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          borderRadius: [6],
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
      },
      yaxis: {
        min: 0,
        max: 400,
      },
      stroke: { show: true, width: 3, colors: ["transparent"] },
      tooltip: { theme: "light" }
    };
  }

  initBreakupChart() {
    this.breakupChartOptions = {
      series: [38, 40, 25],
      labels: ["2022", "2021", "2020"],
      chart: {
        width: 250,
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
          },
        },
      },
      colors: ["#60a8fb", "#3b86f7", "#90c7fe"],
      tooltip: { theme: "dark" }
    };
  }

  initEarningChart() {
    this.earningChartOptions = {
      series: [
        {
          name: "Earnings",
          data: [25, 66, 20, 40, 12, 58, 20]
        }
      ],
      chart: {
        type: "area",
        height: 60,
        sparkline: { enabled: true }
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        colors: ["#f3feff"],
        type: "solid",
        opacity: 0.05,
      },
      markers: { size: 0 },
      tooltip: { theme: "dark" },
    };
  }
}
