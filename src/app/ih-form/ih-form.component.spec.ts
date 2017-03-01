import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhFormComponent } from './ih-form.component';

describe('IhFormComponent', () => {
  let component: IhFormComponent;
  let fixture: ComponentFixture<IhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
