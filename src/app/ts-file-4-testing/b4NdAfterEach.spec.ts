import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

describe('b4 and after each', () => {
  //   let component = new AppComponent();
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent();
    console.log('before each'); // inside the console we see before each test case we find beforeEach console.log
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('test1', () => {
    console.log('test 1');
  });
  it('test2', () => {
    console.log('test 2');
  });
  it('test3', () => {
    console.log('test 3');
  });
  it('Increase count', () => {
    component.increaseCount(2);
    expect(component.count).toBe(12);
    console.log('increase count');
  });
  it('decrease count', () => {
    component.decreaseCount(2);
    // expect(component.count).toEqual(12); // single instance is create therefor if first increased to 12 then decrease to 10
    expect(component.count).toEqual(8); // here we are reseting the value of each instance in afterEach() ,method
    console.log('decrease count');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    console.log('after each'); // inside the console we see after each test case we find afterEach console.log
  });
});
