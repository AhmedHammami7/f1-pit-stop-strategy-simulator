import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent {
  strategy = [
    { tire: 'soft', laps: 15, fuel: 40 },
    { tire: 'medium', laps: 20, fuel: 36 },
    { tire: 'hard', laps: 22, fuel: 32 }
  ];

  lapTimes: number[] = [];
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Lap Time (s)',
      fill: false,
      borderColor: 'red',
      tension: 0.3
    }]
  };

  constructor(private http: HttpClient) {}

  runSimulation() {
    this.http.post<{ lapTimes: number[] }>('http://localhost:3000/api/simulate', { strategy: this.strategy })
      .subscribe(data => {
        this.lapTimes = data.lapTimes;
        this.chartData.labels = this.lapTimes.map((_, i) => `Lap ${i + 1}`);
        this.chartData.datasets[0].data = this.lapTimes;
      });
  }
}