// import { async, ComponentFixture, TestBed } from '@angular/core/testing';  // test bed is the first and most important of the Angualr testing utilities
// import { By }                               from '@angular/platform-browser';
// import { DebugElement }                     from '@angular/core';
// import { LeaderboardAdComponent }           from './leaderboard-ad.component';

// describe('LeaderboardAdComponent', () => {

//   let comp:    LeaderboardAdComponent;
//   let fixture: ComponentFixture<LeaderboardAdComponent>;
//   let de:      DebugElement;
//   let el:      HTMLElement;

//   // async beforeEach
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LeaderboardAdComponent ], // declare the test component
//     })
//     .compileComponents();  // compile template and css, as they are external
//   }));

//   // synchronous beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LeaderboardAdComponent);

//     comp = fixture.componentInstance; // BannerComponent test instance

//     // query for the title <h1> by CSS element selector
//     de = fixture.debugElement.query(By.css('img'));
//     el = de.nativeElement;
//   });

//   it('should contain a value', () => {
//     expect(el.textContent).toEqual('');
//   });

// });