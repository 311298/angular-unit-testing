import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { StudentComponent } from './student.component';
import { StudentService } from '../service/student.service'; // service import

xdescribe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>; // instance of css html and ts file, basically allows us to access anything related to that component
  let h4: HTMLElement;
  let debug: DebugElement;

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
    debug = fixture.debugElement;
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

  it('increase count click', () => {
    const h5 = debug.query(By.css('h5'));
    const button = debug.query(By.css('#btnincreaseNumber'));
    // to check whether button is click or not clicked
    button.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countNumber).toEqual(parseInt(h5.nativeElement.innerText));
  });
});
