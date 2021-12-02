import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
    styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

    destroy$: Subject<void> = new Subject<void>()
    simpleSubject: Subject<string> = new Subject<string>()
    arraySimpleSubject: Subject<string[]> = new Subject<string[]>()
    sub1$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
    sub2$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
    constructor() {
    }

    ngOnInit(): void {
    }

    submit() {
        this.simpleSubject.next('data has been recieved')
    }

    submit2() {
        this.arraySimpleSubject.next(['an', 'array', 'with', '5' , 'items'])
    }

    submit3() {
        this.sub1$.next('sub1')
    }

    submit4() {
        this.sub2$.next('sub2')
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete()
    }

}
