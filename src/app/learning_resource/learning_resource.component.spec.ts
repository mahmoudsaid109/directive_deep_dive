/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Learning_resourceComponent } from './learning_resource.component';

describe('Learning_resourceComponent', () => {
  let component: Learning_resourceComponent;
  let fixture: ComponentFixture<Learning_resourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learning_resourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learning_resourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
