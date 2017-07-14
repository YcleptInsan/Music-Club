import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.database.object('/members/' + memberId);
  }
  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                  description: localUpdatedMember.description,
                                  email: localUpdatedMember.email,
                                  link: localUpdatedMember.link});
  }
  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
