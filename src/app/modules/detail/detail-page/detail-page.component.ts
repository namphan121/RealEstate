import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  data: any = new Data();
  itemId!: string;

  index = 0;
  imageToShow = '';
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.itemId = this.route.snapshot.params['id'];
    this.loadData();
  }

  ngOnInit(): void {
   
  }

  loadData(){
    this.dataService.getDataById(this.itemId).subscribe((res: any) => {
      this.data = res
      this.imageToShow = this.data.images[0];
    })
  }
  prevImg(){
    if (this.index <= 0) {
      this.index = this.data.images.length - 1;      
    } else {
      this.index = this.index - 1;
    }
    this.imageToShow =  this.data.images[this.index];
  }
  nextImg(){
    if (this.index >= this.data.images.length - 1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }  
    this.imageToShow =  this.data.images[this.index];
  }
}
