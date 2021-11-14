import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { QuestPage } from './quest.page';

describe('QuestPage', () => {
  let component: QuestPage;
  let fixture: ComponentFixture<QuestPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should go to quest2 on quest", () => {
    spyOn(router, 'navigate');
    component.quest();
    expect(router.navigate).toHaveBeenCalledWith('quest');
  } )
});
