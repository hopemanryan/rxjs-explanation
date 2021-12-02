import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import { SimpleSubjectComponent } from './simple-subject/simple-subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { SubjectsWithPipesComponent } from './subjects-with-pipes/subjects-with-pipes.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

@NgModule({
    declarations: [
        AppComponent,
        SimpleSubjectComponent,
        BehaviourSubjectComponent,
        AsyncSubjectComponent,
        SubjectsWithPipesComponent,
        CombineLatestComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
