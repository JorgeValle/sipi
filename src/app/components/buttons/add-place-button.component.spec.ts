// import { async, ComponentFixture, TestBed } from '@angular/core/testing';  // test bed is the first and most important of the Angualr testing utilities
// import { By }                               from '@angular/platform-browser';
// import { DebugElement }                     from '@angular/core';
// import { AddPlaceButtonComponent }        from './add-place-button.component';

// describe('AddPlaceButtonComponent', () => {
  
//     let comp:    AddPlaceButtonComponent;
//     let fixture: ComponentFixture<AddPlaceButtonComponent>;
//     let de:      DebugElement;
//     let el:      HTMLElement;
  
//     // async beforeEach
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [ AddPlaceButtonComponent ], // declare the test component
//       })
//       .compileComponents();  // compile template and css
//     }));

//     // synchronous beforeEach
//     beforeEach(() => {
//       fixture = TestBed.createComponent(AddPlaceButtonComponent);

//       comp = fixture.componentInstance; // BannerComponent test instance

//       // query for the title <h1> by CSS element selector
//       de = fixture.debugElement.query(By.css('button'));
//       el = de.nativeElement;
//     });

//     it('no title in the DOM until manually call `detectChanges`', () => {
//       expect(el.textContent).toEqual('Agregar un Lugar');
//     });

// }); 