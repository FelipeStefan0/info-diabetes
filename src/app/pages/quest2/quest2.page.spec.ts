import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Quest2Page } from './quest2.page';

describe('Quest2Page', () => {
  let component: Quest2Page;
  let fixture: ComponentFixture<Quest2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Quest2Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Quest2Page);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should go to quest on quest2", () => {
    spyOn(router, 'navigate');
    component.quest2();
    expect(router.navigate).toHaveBeenCalledWith('quest2');
  } )
});