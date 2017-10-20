import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsArray = [
    {title: 'From Plan to Execution', date:'25 AUG 2015  /  BY MADDY', text: 'Mauris sodales in enim sit sodales dolor, placerat ultrices ut pede justo odio. In accumsan morbi at, mi luctus nullam volutpat facilisis cursus sed quis autem vel eum iure.'},  
    {title: 'New Team Member', date:'25 AUG 2015  /  BY HALEY', text: 'Tincidunt mauris sit suspendisse. Scelerisque lorem nec, tempus quis nullam nec gravida, convallis ac, nascetur id eget lectus nibh quam ad, in magna mi est adipiscing donec dui.'},
  ];
    

  constructor() { }

  ngOnInit() {
  }

}
