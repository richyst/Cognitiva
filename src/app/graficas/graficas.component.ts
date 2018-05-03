import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  @Input() info: Array<Object>;
  single = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];
  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#4286f4', '#85ef43', '#e53d9a', '#deed40']
  };

  constructor() { }

  ngOnInit() {
  }

}
