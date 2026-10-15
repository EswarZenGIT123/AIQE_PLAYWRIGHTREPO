# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\github.spec.ts >> UI_002: Search repository under Top Repositories
- Location: tests\ui\github.spec.ts:15:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/login", waiting until "load"

```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { config } from '../config/appConfig';
  3  | 
  4  | export class LoginPage {
  5  |   constructor(private readonly page: Page) {}
  6  | 
  7  |   async login() {
  8  |     if (!config.password) throw new Error('GITHUB_PASSWORD is missing. Set it in .env or GitHub Actions secrets.');
> 9  |     await this.page.goto('/login');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  10 |     await this.page.locator('#login_field').fill(config.username);
  11 |     await this.page.locator('#password').fill(config.password);
  12 |     await this.page.locator('input[name="commit"]').click();
  13 |     // GitHub can require CAPTCHA, 2FA or device verification. Complete those manually if prompted.
  14 |     await expect(this.page).toHaveURL(/github\.com\/(?!login(?:\?|$))/, { timeout: 30_000 });
  15 |   }
  16 | }
  17 | 
```