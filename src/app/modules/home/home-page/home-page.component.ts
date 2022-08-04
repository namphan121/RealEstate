import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from 'src/app/model/area.model';
import { Conscious } from 'src/app/model/conscious.model';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService , private route: Router) {
    this.loadData();
   }

  ngOnInit(): void {
  }

  data: Data[] =[];

  conscious: Conscious[] = [
    {
      id : 1,
      city: "Đà Nẵng",
      value: "danang"
    },
    {
      id : 2,
      city: "Hà Nội",
      value:"hanoi"
    },
    {
      id : 3,
      city: "Hồ Chí Minh",
      value:"hochiminh"
    }
  ];

  areas: Area[] = [
    {
      id : 1,
      area: "<30 m2",
      value: 30
    },
    {
      id : 2,
      area: "30 - 45 m2",
      value: 31
    },
    {
      id : 3,
      area: "45 - 60 m2",
      value: 46
    },
    {
      id : 4,
      area: ">60 m2",
      value: 60
    },
  ];


  loadData(){
    this.dataService.getData().subscribe((res: any) => {
      this.data = res
    })
  }

}
