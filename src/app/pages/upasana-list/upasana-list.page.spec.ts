import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpasanaListPage } from './upasana-list.page';

describe('UpasanaListPage', () => {
  let component: UpasanaListPage;
  let fixture: ComponentFixture<UpasanaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpasanaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpasanaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
