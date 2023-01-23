import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpasanaAddDevoteePage } from './upasana-add-devotee.page';

describe('UpasanaAddDevoteePage', () => {
  let component: UpasanaAddDevoteePage;
  let fixture: ComponentFixture<UpasanaAddDevoteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpasanaAddDevoteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpasanaAddDevoteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
