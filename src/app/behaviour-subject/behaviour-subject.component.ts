import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {
   bSubject: BehaviorSubject<string> = new BehaviorSubject<string>('initial value - stated in the initiation of the subject')
  text!: string;
  constructor() { }

  ngOnInit(): void {

    this.bSubject.subscribe(value => {
      this.text = value;
    })
  }

  submit() {
     this.bSubject.next('Second value updated after click')
  }

}
