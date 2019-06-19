import { Component } from '@angular/core';
import { FileService } from  './file.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Attendance-managment';
  public displayLoader: Observable<boolean> = this.fileService.isLoading();
  constructor(private fileService: FileService) {}
}
