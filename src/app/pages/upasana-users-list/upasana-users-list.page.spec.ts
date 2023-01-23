import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpasanaUsersListPage } from './upasana-users-list.page';

describe('UpasanaUsersListPage', () => {
  let component: UpasanaUsersListPage;
  let fixture: ComponentFixture<UpasanaUsersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpasanaUsersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpasanaUsersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
