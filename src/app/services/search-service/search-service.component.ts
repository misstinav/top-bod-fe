import { Component } from '@angular/core';

@Component({
  selector: 'app-search-service',
  imports: [],
  templateUrl: './search-service.component.html',
  styleUrl: './search-service.component.css'
})
export class SearchServiceComponent {

  async ngOnInit() {
    const res = await fetch('backend link'); //added var that connects to backend endpoint
    const data = await res.json();
    //this.whateverVar.set(data) TODO: need to update the whatever var
  }
}
