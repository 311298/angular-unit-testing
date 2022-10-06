import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// import from other files
import { Addition } from './ts-file-4-testing/calulator';

describe('AppComponent', () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('unit-testing app is running!');
  // });
  xit('my test case', () => {
    expect(true).toBe(true);
  });

  it('show alert message', () => {
    expect(component.showMessage('hello')).toBe('hello');
  });

  it('addition method', () => {
    expect(Addition(10, 20)).toBe(30);
  });

  it('toBe and toEqual test cases', () => {
    var a = 'hello';
    var b = 'hello';
    // expect(a).toBe(b);
    expect(a).toEqual(b); // here it may be passing but generally use it for object comparision
  });

  it('toBe and toEqual test cases 2', () => {
    var a = ['1'];
    var b = ['1'];
    // expect(a).toBe(b); // will not pass because of deep check
    expect(a).toEqual(b);
  });
});
