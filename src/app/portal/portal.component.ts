import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  members: Member[];

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberServie.getMembers();
  }

  goToDetailsPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };
}
