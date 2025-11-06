const { test, expect } = require('../fixtures.js');

test.describe('FAQs Page Validations', async () => {
    test('Validate the contents of the FAQs page', async ({ page, pom }) => {

        await test.step('Validate the elements of the page', async () => {
            await Promise.all([
                expect(pom.faqsPage.watchFaqsButton).toBeVisible(),
                expect(pom.faqsPage.haveQuestionsHeader).toBeVisible(),
                expect(pom.faqsPage.gotAnswersHeader).toBeVisible(),
                expect(pom.faqsPage.faqsInput).toBeVisible(),
                expect(pom.faqsPage.questionsHeader('How does AvodahMed work?')).toBeVisible(),
                expect(pom.faqsPage.questionsHeader('Is it secure and compliant?')).toBeVisible(),
                expect(pom.faqsPage.questionsHeader('How much time will this save me?')).toBeVisible(),
                expect(pom.faqsPage.StillHaveQuestionsHeader).toBeVisible(),
                expect(pom.faqsPage.contactUsButton).toBeVisible(),
                expect(pom.faqsPage.contactUsButton).toHaveAttribute('href', 'https://www.avodahmed.com/contact-us')
            ]);
            await pom.faqsPage.questionsHeader('How does AvodahMed work?').click();
            await expect(pom.faqsPage.answerParagraph(
                'Ambient Scribe uses AI to capture clinical documentation in real-time during patient visits')).toBeVisible();
            await pom.faqsPage.questionsHeader('Is it secure and compliant?').click();
            await expect(pom.faqsPage.answerParagraph(
                'Absolutely. Ambient Scribe is built to meet the highest standards of security')).toBeVisible();
            await pom.faqsPage.questionsHeader('How much time will this save me?').click();
            await expect(pom.faqsPage.answerParagraph(
                'Clinicians typically save 2–3 hours per day by automating documentation')).toBeVisible();
        });

        await test.step('Validate the functionality of the FAQs input and the shown results', async () => {
            await pom.faqsPage.faqsInput.scrollIntoViewIfNeeded();
            await pom.faqsPage.faqsInput.type('cost', { delay: 200 });
            await expect(pom.faqsPage.showingResultsLabel).toBeVisible();
            await expect(pom.faqsPage.showingResultsLabel).toContainText('cost');
            await expect(pom.faqsPage.questionsHeader('How much does it cost?')).toBeVisible();
            await pom.faqsPage.questionsHeader('How much does it cost?').click();
            await expect(pom.faqsPage.answerParagraph(
                'We offer flexible pricing plans to suit practices of all sizes. Contact us for a customized quote.')).toBeVisible();
        });
    });
});