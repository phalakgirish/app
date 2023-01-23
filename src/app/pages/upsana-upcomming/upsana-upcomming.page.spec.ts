import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsanaUpcommingPage } from './upsana-upcomming.page';

describe('UpsanaUpcommingPage', () => {
  let component: UpsanaUpcommingPage;
  let fixture: ComponentFixture<UpsanaUpcommingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsanaUpcommingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsanaUpcommingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
