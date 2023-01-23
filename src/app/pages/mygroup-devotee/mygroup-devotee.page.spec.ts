import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MygroupDevoteePage } from './mygroup-devotee.page';

describe('MygroupDevoteePage', () => {
  let component: MygroupDevoteePage;
  let fixture: ComponentFixture<MygroupDevoteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygroupDevoteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MygroupDevoteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
