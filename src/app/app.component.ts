import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor-sample';

  constructor(private apiService: ApiService) {
    this.displayList();
  }

  displayList() {
    this.apiService.getAllUsers('').subscribe(
      (data) => {
        console.log(data);
      }
    );

    this.apiService.getAllUsers('test').subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('TESTSTSTSTSTSTSTS:', err);
      }
    );

    this.apiService.getAllUsers('').subscribe(
      (data) => {
        console.log(data);
      }
    );

    this.apiService.getAllUsers('').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
