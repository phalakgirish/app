import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiteraturePage } from './literature.page';

describe('LiteraturePage', () => {
  let component: LiteraturePage;
  let fixture: ComponentFixture<LiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
