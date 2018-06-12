

// importing, through native JS, from Angular core or libraries
import { Component, Input, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router }        from '@angular/router';
import { Location }                                from '@angular/common';


@Component({
	selector: 'share-modal',
	templateUrl: './share-modal.component.html',
	//providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class ShareModalComponent {

  constructor(private router: Router) {};

  /**
   * facebook share
   */
  facebookShare(): void {
    console.log('Facebook share');

  }

  /**
   * Returns URL slug
   * @returns {string} - the URL slug
   */
  returnUrl(): string {
    return this.router.url;
  };

  /**
   * Copies URL to clipboard
   */
  copyLinkToClipboard(): void {

    // TODO: make this copy correctly

    let url = document.getElementById('current-url');
    let range = document.createRange();
    range.selectNode(url);
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();

    console.log(range);
    console.log('Link was copied');
  };

  /**
   * Send current URL by email
   */
  sendByEmail(): void {
    window.location.href = `mailto:?subject=Mira este lugar en Sipi!
                                   &body=Mira este lugar en Sipi! https://www.sipi.com${this.router.url}`;
  };


}