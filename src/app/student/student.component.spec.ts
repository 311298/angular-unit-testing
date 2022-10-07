import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service'; // service import

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>; // instance of css html and ts file, basically allows us to access anything related to that component
  let h4: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService], // service we created
      imports: [AppRoutingModule, HttpClientModule], //app routing module etc
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h4 = fixture.nativeElement.querySelector('h4');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('spyOn method', () => {
    // use to mock the particular method
    spyOn(component, 'calculate');
    component.saveData(); // inside the save data we are calling the calculate
    expect(component.calculate).toHaveBeenCalled(); // to have been called expect the spy
  });

  it('spyOn method 2', () => {
    // use to mock the particular method
    spyOn(component, 'calculate').and.returnValues(40, 20); // it disregards the value provided and pass own value form here
    let result = component.studentSchoolResult();
    expect(result).toEqual('Pass');
  });

  it('spyOn method 3', () => {
    // use to mock the particular method
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, 'saveDetails').and.callFake(() => {
      return of({
        result: 200,
      });
    });
    spyOn(component, 'saveDataIntoConsole').and.stub(); // does not care about the method
    component.saveData();
    expect(component.result).toEqual({
      result: 200,
    });
  });

  it('verify the h4 element value', () => {
    component.studentSchoolResult();
    fixture.detectChanges();
    // expect(h4.textContent).toBe(component.studentResult); //both passes
    expect(h4.textContent).toBe('Fail');
  });
});
