import { Component, OnInit } from '@angular/core';
import {map, Observable, Subject, tap} from "rxjs";

@Component({
  selector: 'app-subjects-with-pipes',
  templateUrl: './subjects-with-pipes.component.html',
  styleUrls: ['./subjects-with-pipes.component.scss']
})
export class SubjectsWithPipesComponent implements OnInit {

  subObserver: Observable<string> = new Observable<string>();
  subject: Subject<string> = new Subject<string>()
  constructor() { }

  ngOnInit(): void {
    this.subObserver = this.subject.pipe(
        map((val) => val + '  | text add from the pipe' )
    );
  }

  submit() {
    this.subject.next('the original text sent from button')
  }
}
