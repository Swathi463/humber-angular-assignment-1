import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onType(event:KeyboardEvent)
  {
    console.log("User Typed "+event.key);
    
  }
}
