// Angular core
import { Injectable, Inject } from '@angular/core';
import { Title }      from '@angular/platform-browser';
import { DOCUMENT }   from '@angular/common';

@Injectable({
  providedIn: 'root'
})

// application logic is added here, in the service
@Injectable()
export class SeoService {

  constructor(private title: Title, @Inject(DOCUMENT) private doc) {}

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
 }
 
}