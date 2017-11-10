import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {
  martosFavouriteArray = [
    {title: 'Palm & Bananas', text: 'for Cinque', clName:'t41'},
    {title: 'Inced Up & Cool', text: 'for Type Factory', clName:'t42'},  
    {title: 'Alike', text: 'for Helwen Clothing', clName:'t43'},
  ];
    
  martaFavoriteArray = [  
    {title: 'The Boutique', text: 'for Vintage Co', clName:'t44'},
    {title: 'Big Breaeds & Home Brewed Ale', text: 'for Hendricks Brewery', clName:'t45'},
    {title: 'Spring & Hippie', text: 'for America Apparel Clothing', clName:'t46'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
