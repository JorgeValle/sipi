// // importing to get access to symbols referenced in the spec
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';  // test bed is the first and most important of the Angualr testing utilities
// import { By }                               from '@angular/platform-browser';
// import { DebugElement }                     from '@angular/core';
// import { SuccessAlertComponent }            from './success-alert.component';

// describe('SuccessAlertComponent', () => {

//   let comp:    SuccessAlertComponent;
//   let fixture: ComponentFixture<SuccessAlertComponent>;
//   let de:      DebugElement;
//   let el:      HTMLElement;

//   // async beforeEach
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SuccessAlertComponent ], // declare the test component
//     })
//     .compileComponents();  // compile template and css
//   }));

//   // synchronous beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SuccessAlertComponent);

//     comp = fixture.componentInstance; // component test instance

//     // query for the img element by CSS element selector
//     de = fixture.debugElement.query(By.css('div'));
//     el = de.nativeElement;
//   });

//   it('should contain a value', () => {
//     expect(el.textContent).toEqual('');
//   });

// });