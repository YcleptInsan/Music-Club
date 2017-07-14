import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {


  members: Member[] = [
    new Member("James", "music production", "james@gmail.com", "www.soundcloud.com/jamesMusic", 1),
    new Member("Nick Wise", "Love music production. Anything audio related", "nickmwise@gmail.com", "www.soundcloud.com/YcleptInsan", 2),
    new Member("Larry", "music production and Linux Admin", "larry@gmail.com", "www.soundcloud.com/jamesMusic", 3),
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailsPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };
}
