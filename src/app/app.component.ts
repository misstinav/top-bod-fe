import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DayComponent } from "./components/day/day.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, DayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'top-bod-fe';
}
