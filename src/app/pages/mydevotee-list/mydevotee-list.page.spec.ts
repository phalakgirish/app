import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MydevoteeListPage } from './mydevotee-list.page';

describe('MydevoteeListPage', () => {
  let component: MydevoteeListPage;
  let fixture: ComponentFixture<MydevoteeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydevoteeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MydevoteeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
