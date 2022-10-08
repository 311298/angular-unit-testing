import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { StudentService } from '../service/student.service';

import { UnitServiceComponent } from './unit-service.component';

@Injectable({ providedIn: 'root' })
class MockStudentService extends StudentService {
  public newSaveMethod() {
    return true;
  }
}

describe('UnitServiceComponent', () => {
  let component: UnitServiceComponent;
  let fixture: ComponentFixture<UnitServiceComponent>;
  let service: StudentService; //33

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitServiceComponent],
      providers: [StudentService], //33
      imports: [HttpClientModule], //33
    }).compileComponents();

    TestBed.overrideComponent(UnitServiceComponent, {
      //33
      set: {
        providers: [{ provide: StudentService, useClass: MockStudentService }],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // service = TestBed.get(StudentService); //get method
    service = TestBed.inject(StudentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dependency injection using testBed get method -- 33', () => {
    expect(service instanceof StudentService).toBeTruthy(); // instance is of correct service or not
  });

  it('dependency injection using inject method -- 33', inject(
    [StudentService],
    (instanceService: StudentService) => {
      expect(instanceService).toBeTruthy(); //student service initialized or not
      expect(instanceService instanceof StudentService).toBeTruthy(); // instance is of correct service or not
    }
  ));

  it('dependency injection using the override method --33', () => {
    let element = fixture.debugElement.injector.get(StudentService);
    expect(element instanceof StudentService).toBeTruthy();
  });
});
