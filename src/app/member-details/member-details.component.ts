import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  memberId = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });
  }

}
