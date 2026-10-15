# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\github.spec.ts >> UI_002: Search repository under Top Repositories
- Location: tests\ui\github.spec.ts:15:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('dynamic-side-panel-items-search-button')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByTestId('dynamic-side-panel-items-search-button') with timeout 5000ms
  - waiting for getByTestId('dynamic-side-panel-items-search-button')

```

```yaml
- link "Skip to content":
  - /url: "#start-of-content"
- banner "Global navigation menu":
  - button "Open menu"
  - link "Homepage (g then d)":
    - /url: /
  - navigation "Breadcrumbs":
    - list:
      - listitem:
        - link "Dashboard":
          - /url: https://github.com/
  - button "Open quick search dialog, type / to search": Type / to search
  - link "Chat with Copilot":
    - /url: /copilot
  - button "Open Copilot…"
  - button "Create new..."
  - link "All issues (g then i)":
    - /url: /issues
  - link "All pull requests (g then p)":
    - /url: /pulls
  - link "All repositories":
    - /url: /repos
  - link "You have unread notifications (g then n)":
    - /url: /notifications
  - button "Open user navigation menu":
    - img "User avatar"
- complementary "Dashboard menu":
  - navigation "Site navigation":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "Feed":
          - /url: /feed
  - separator
- main:
  - heading "Dashboard" [level=1]
  - button "Dashboard preview options": Preview
  - text: Good evening, EswarZenGIT123!
  - heading "Copilot" [level=2]
  - status
  - textbox "Ask anything or type @ to add context with Copilot":
    - /placeholder: Ask anything or type @ to add context
  - button "Ask"
  - button "Select repositories to attach to conversation": All repositories
  - button "Add files, and spaces"
  - button "View token usage"
  - button "Send now (enter)"
  - heading "Chat commands" [level=2]
  - list:
    - listitem:
      - button "Debug"
    - listitem:
      - button "Agent"
    - listitem:
      - button "Create issue"
    - listitem:
      - button "Write code"
    - listitem:
      - button "Git"
    - listitem:
      - button "Pull requests"
  - heading "Pull requests" [level=2]
  - link "View all pull requests":
    - /url: /pulls
  - button "Pull request options"
  - paragraph: No pull requests found, try a different filter.
  - heading "Issues" [level=2]
  - link "View all issues":
    - /url: /issues
  - button "Issue options"
  - paragraph: No issues found, try a different filter.
- complementary "Explore":
  - img "GitHub Universe 2026"
  - button "Dismiss"
  - heading "Join Universe virtually, from anywhere." [level=3]
  - link "Save your seat":
    - /url: /in-product-messaging/dismiss-and-redirect?destination_key=db_virt_uni26&dismiss_scope=user&notice=db_virt_uni26
  - heading "Latest from our changelog" [level=2]
  - list:
    - listitem:
      - text: Oct 16, 202615 minutes ago
      - link "Upcoming deprecation of selected GitHub Copilot models in mid-November":
        - /url: https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november
    - listitem:
      - text: Oct 15, 20264 hours ago
      - link "AI Scan for pull requests generally available":
        - /url: https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available
    - listitem:
      - text: Oct 15, 20266 hours ago
      - link "Agentic autofix for code scanning alerts general availability":
        - /url: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
    - listitem:
      - text: Oct 15, 20266 hours ago
      - link "Email notifications for repository push events have been retired":
        - /url: https://github.blog/changelog/2026-10-15-email-notifications-for-repository-push-events-have-been-retired
  - link "View changelog →":
    - /url: https://github.blog/changelog
- contentinfo:
  - heading "Footer" [level=2]
  - link "GitHub Homepage":
    - /url: https://github.com
  - text: © 2026 GitHub, Inc.
  - navigation "Footer":
    - heading "Footer navigation" [level=3]
    - list "Footer navigation":
      - listitem:
        - link "Terms":
          - /url: https://docs.github.com/site-policy/github-terms/github-terms-of-service
      - listitem:
        - link "Privacy":
          - /url: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
      - listitem:
        - link "Security":
          - /url: https://github.com/security
      - listitem:
        - link "Status":
          - /url: https://www.githubstatus.com/
      - listitem:
        - link "Community":
          - /url: https://github.community/
      - listitem:
        - link "Docs":
          - /url: https://docs.github.com/
      - listitem:
        - link "Contact":
          - /url: https://support.github.com?tags=dotcom-footer
      - listitem:
        - button "Manage cookies"
      - listitem:
        - button "Do not share my personal information"
```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { config } from '../config/appConfig';
  3  | 
  4  | export class DashboardPage {
  5  |   constructor(private readonly page: Page) {}
  6  | 
  7  |   async verifyDashboard() {
  8  |     await expect(this.page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();
  9  |   }
  10 | 
  11 |   async searchTopRepository() {
  12 |   
> 13 |     await expect(this.page.getByTestId('dynamic-side-panel-items-search-button')).toBeVisible();
     |                                                                                   ^ Error: expect(locator).toBeVisible() failed
  14 |     await this.page.getByRole('heading', { name: 'Top repositories Search for' }).click();
  15 |     await this.page.getByTestId('dynamic-side-panel-items-search-button').click();
  16 |     await this.page.getByTestId('dynamic-side-panel-items-search-input').fill(config.repository);
  17 |     await this.page.waitForTimeout(5000); 
  18 |     await this.page.getByTestId('dynamic-side-panel-items-item').click();
  19 |     await this.page.waitForTimeout(5000); 
  20 |   }
  21 | 
  22 |   async openSearchedRepository() {
  23 |    
  24 |     await expect(this.page.getByTestId('dynamic-side-panel-items-search-button')).toBeVisible();
  25 |     await this.page.getByRole('heading', { name: 'Top repositories Search for' }).click();
  26 |     await this.page.getByTestId('dynamic-side-panel-items-search-button').click();
  27 |     await this.page.getByTestId('dynamic-side-panel-items-search-input').fill(config.repository);
  28 |     await this.page.waitForTimeout(5000); 
  29 |     await this.page.getByTestId('dynamic-side-panel-items-item').click();
  30 |     await this.page.waitForTimeout(5000); 
  31 |     await expect(this.page.getByTestId('repo-name-link')).toBeVisible();
  32 |     await expect(this.page.getByTestId('repo-name-link')).toContainText(config.repository);
  33 |   }
  34 | }
  35 | 
```