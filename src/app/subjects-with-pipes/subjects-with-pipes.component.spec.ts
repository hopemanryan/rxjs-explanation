import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsWithPipesComponent } from './subjects-with-pipes.component';

describe('SubjectsWithPipesComponent', () => {
  let component: SubjectsWithPipesComponent;
  let fixture: ComponentFixture<SubjectsWithPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsWithPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsWithPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
