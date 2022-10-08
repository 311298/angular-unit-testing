import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from './filesize.pipe';

import { PipeComponent } from './pipe.component';

describe('PipeComponent', () => {
  let component: PipeComponent;
  let fixture: ComponentFixture<PipeComponent>;
  let upperPipe: UpperCasePipe; //
  let lowerPipe: LowerCasePipe; //
  let customPipe: FileSizePipe; //

  beforeEach(async () => {
    upperPipe = new UpperCasePipe(); //
    lowerPipe = new LowerCasePipe(); //
    customPipe = new FileSizePipe(); //

    await TestBed.configureTestingModule({
      declarations: [PipeComponent, FileSizePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('unit test case for upperPipe', () => {
    expect(upperPipe.transform(component.title)).toEqual(
      'UNIT TESTING OF PIPES'
    );
  });
  it('unit test case for lowerPipe', () => {
    expect(lowerPipe.transform(component.title)).toEqual(
      'unit testing of pipes'
    );
  });
  // above are the inbuilt pipes

  // unit test case for custom pipe
  it('unit test case for file size pipe custom pipe', () => {
    expect(customPipe.transform(component.size)).toEqual(
      'file size is -- 117.62MB'
    );
  });
  it('unit test case for file size pipe custom pipe with parameter', () => {
    expect(customPipe.transform(component.size, 'GB')).toEqual(
      'file size is -- 117.62MB'
    );
  });
});
