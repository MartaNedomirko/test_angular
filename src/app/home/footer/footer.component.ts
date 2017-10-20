import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerArray=[
   {ImgSrc:'http://warhol.thememountain.com/images/logos/rosco-logo-grid.svg'},
   {ImgSrc:'http://warhol.thememountain.com/images/logos/wicked-logo-grid.svg'},
   {ImgSrc:'http://warhol.thememountain.com/images/logos/repetition-logo-grid.svg'},
   {ImgSrc:'http://warhol.thememountain.com/images/logos/macaw-logo-grid.svg'},
   {ImgSrc:'http://warhol.thememountain.com/images/logos/adventure-logo-grid.svg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
