import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http_client: HttpClient) {}
  title = 'Rocket Interviews';

  flights$: Observable<any>;

  ngOnInit() {
    this.flights$ = this.http_client.get('./assets/flights.json');
  }
}
