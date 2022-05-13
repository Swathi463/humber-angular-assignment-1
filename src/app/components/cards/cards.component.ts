import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/models/product.data';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards:any=[];
  showModal = false;
  constructor() { }

  ngOnInit(): void {
    this.cards = productData;
    this.showModal=false;
  }
  
  
  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
}
}