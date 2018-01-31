import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  public navList = [
    { img: '/assets/nav/1.png', name: '首页', url: '/smartHome/electric' },
    { img: '/assets/nav/2.png', name: '资源共享', url: '/smartHome/electric' },
    { img: '/assets/nav/3.png', name: '智能机器', url: '/smartHome/electric' },
    { img: '/assets/nav/4.png', name: '关于', url: '/smartHome/electric' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
