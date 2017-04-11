import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { APP_SERVICES } from './services';
import { appConfig, APP_CONFIG } from './config';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [],
  exports: [HttpModule],
  providers: [APP_SERVICES, { provide: APP_CONFIG, useValue: appConfig }]
})

export class CoreModule {
  /**
   * Creates an instance of CoreModule.
   * Used to ensure that CoreModule is instantiated only once in app.
   * @param {CoreModule} parentModule CoreModule instance.
   * @memberOf CoreModule
   */
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}