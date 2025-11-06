const base = require('@playwright/test');

import { FaqsPage } from './page-object/faqsPage.js';
import { OurSolutionsPage } from './page-object/ourSolutionPage.js';
import { TopbarPage } from './page-object/topbarPage.js';

exports.test = base.test.extend({

    page: async ({ browser, baseURL }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(baseURL, { waitUntil: 'commit' });
        await page.waitForResponse(
            response => response.url().includes('https://visits.visitor-analytics.io/api/wix/websites/') && response.status() === 200);
        await use(page);
    },

    pom: async ({ page }, use) => {
        const pom = {
            faqsPage: new FaqsPage(page),
            ourSolutionPage: new OurSolutionsPage(page),
            topbarPage: new TopbarPage(page)
        };
        await use(pom);
    }
});

exports.expect = base.expect;