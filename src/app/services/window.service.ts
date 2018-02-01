// Angular core
import { Injectable } from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable()
// application logic is added here, in the service
export class WindowService {
  get nativeWindow(): any {
    return getWindow();
  }
}