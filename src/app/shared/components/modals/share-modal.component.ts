import { Component, Input, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router }        from '@angular/router';
import { Location }                                from '@angular/common';


@Component({
  selector: 'share-modal',
  templateUrl: './share-modal.component.html',
})

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
    window.location.href = `mailto:?subject=¡Mira lo que encontré en Sipi!
                                   &body=Encontré este lugar en Sipi: https://www.sipi.app${this.router.url}`;
  };


}