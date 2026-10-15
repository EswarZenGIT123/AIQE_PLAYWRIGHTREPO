import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    timeout: 30000,

    reporter: [
        ['list'],
        ['html', { open: 'never' }],
        ['allure-playwright', {
            resultsDir: 'allure-results'
        }]
    ],

    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});