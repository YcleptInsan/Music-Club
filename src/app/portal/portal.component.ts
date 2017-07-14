import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  members: Member[] = [
    new Memeber("james", "music production", "james@gmail.com", "www.soundcloud.com/jamesMusic", 1),
    new Memeber("Nick Wise", "Love music production. Anything audio related", "nickmwise@gmail.com", "www.soundcloud.com/YcleptInsan", 2),
    new Memeber("Larry", "music production and Linux Admin", "larry@gmail.com", "www.soundcloud.com/jamesMusic", 3),
  ]
  constructor() { }

  ngOnInit() {
  }

}
