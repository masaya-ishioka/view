import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  items = [
    {name: "test1", price: 600, link: "aaaa"},
    {name: "test1", price: 600, link: "aaaa"},
    {name: "test1", price: 600, link: "aaaa"},
    {name: "test1", price: 600, link: "aaaa"},
    {name: "test1", price: 600, link: "aaaa"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
