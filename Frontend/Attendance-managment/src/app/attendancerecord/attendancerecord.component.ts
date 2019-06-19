import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-attendancerecord',
  templateUrl: './attendancerecord.component.html',
  styleUrls: ['./attendancerecord.component.css']
})
export class AttendancerecordComponent implements OnInit {
  users: Object;
  counter: Object;
  value : number;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.users = data;
    });
    this.data.getmonth().subscribe(count => {
      this.counter = count;

    });

  }


}
