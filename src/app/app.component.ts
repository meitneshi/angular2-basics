import { Component } from '@angular/core';

// decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-root', // The components CSS element selector
  templateUrl: './app.component.html', // The location of the html template file
  styleUrls: ['./app.component.css'] // the location of the private CSS style
})

export class AppComponent {
  title = 'Tour of Heroes';
}
