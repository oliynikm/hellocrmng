import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMailsComponent } from './client-mails.component';

describe('ClientMailsComponent', () => {
  let component: ClientMailsComponent;
  let fixture: ComponentFixture<ClientMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
