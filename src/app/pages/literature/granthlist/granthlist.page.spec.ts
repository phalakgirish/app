import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GranthlistPage } from './granthlist.page';

describe('GranthlistPage', () => {
  let component: GranthlistPage;
  let fixture: ComponentFixture<GranthlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranthlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GranthlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
