import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  providers: [MemberService]
})
export class MemberDetailsComponent implements OnInit {

  memberId: number;
  memberToDisplay: Member;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private memberService: MemberService
            ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}
