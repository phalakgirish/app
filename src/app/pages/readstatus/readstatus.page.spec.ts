import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadstatusPage } from './readstatus.page';

describe('ReadstatusPage', () => {
  let component: ReadstatusPage;
  let fixture: ComponentFixture<ReadstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
