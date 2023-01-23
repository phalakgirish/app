import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsanaSearchNumberPage } from './upsana-search-number.page';

describe('UpsanaSearchNumberPage', () => {
  let component: UpsanaSearchNumberPage;
  let fixture: ComponentFixture<UpsanaSearchNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsanaSearchNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsanaSearchNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
