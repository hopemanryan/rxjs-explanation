import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-simple-subject',
    templateUrl: './simple-subject.component.html',
    styleUrls: ['./simple-subject.component.scss']
})
export class SimpleSubjectComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject<void>()
    simpleSubject: Subject<string> = new Subject<string>()
    text = 'times pipe went: '

    constructor() {
    }

    ngOnInit(): void {
        this.simpleSubject.pipe(
            // this is to keep subscriptions from memory leaking
            takeUntil(this.destroy$)
        ).subscribe((value: string) => {
            this.text = this.text + ' ' + value;
        })
    }

    submit() {
        this.simpleSubject.next('1')
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete()
    }
}
