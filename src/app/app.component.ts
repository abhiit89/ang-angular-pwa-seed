import { Component, OnInit } from '@angular/core';
import {DataServiceService} from './data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: Observable<any>;
  constructor(private dataSer:DataServiceService){}

  ngOnInit(){
    this.title = this.dataSer.getRandomData()
  }
}
