import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Person Details';

  person: any = {
    name: {
      firstName: 'Ray',
      lastName: 'Ayala'
    },
    gender: 'M',
    city: 'Fresno'
  };
}
