import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MygroupPage } from './mygroup.page';

describe('MygroupPage', () => {
  let component: MygroupPage;
  let fixture: ComponentFixture<MygroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MygroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
