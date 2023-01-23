import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MydevoteePage } from './mydevotee.page';

describe('MydevoteePage', () => {
  let component: MydevoteePage;
  let fixture: ComponentFixture<MydevoteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydevoteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MydevoteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
