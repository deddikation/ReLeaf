import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Product: Product = 
  {
    pID: 1, 
    name: 'Tinley Cannabis Margarita (Alcohol Free)',
    price: 360,
    description: 'Alcohol-free, ready to drink beverage infused with real tequila and lime extracts, as well as Pineapple Jack Sativa. Less than half the calories of ready-to-drink alcohol margaritas, with the same great taste. Four single-serve (10mg x 4) bottles. Available for purchase at ShowGrow (Long Beach), 10 Spot (Santa Ana), Peoples OC, and available for purchase or delivery at BARC (LA) and 420 Central (Orange County).',
    imgLoc:"assets/products/tcm.jpg",
    ufID:1,
    cBDT:1,
    cID:1
  };



  constructor() { }

  ngOnInit() {
  }

 

}
