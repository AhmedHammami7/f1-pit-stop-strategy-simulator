import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app.server.module';
import { platformServer } from '@angular/platform-server';

/* if (environment.production) {
  enableProdMode();
}
 */
export default () => platformServer().bootstrapModule(AppServerModule);