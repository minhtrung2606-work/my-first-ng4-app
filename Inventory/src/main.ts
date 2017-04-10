import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// This file will be treated as the entry point of this application which is declared in .angular-cli.json file
// under apps.main path

// Here's the whole flow to serve a server using `ng serve` command:
// 1. It looks at .angular-cli.json file to find the declared entry point under apps.main and apps.index paths
// 2. The entry point TypeScript file will boots up the top-level component
// 3. Top-level component renders the rest of our app

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
