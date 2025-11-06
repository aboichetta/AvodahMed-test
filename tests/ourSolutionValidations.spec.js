const { test, expect } = require('../fixtures.js');

test.describe('Our Solution Page Validations', async () => {
    test('Validate the contents of the Our Solution page', async ({ pom }) => {

        await test.step('Validate the elements of the page', async () => {
            await Promise.all([
                expect(pom.ourSolutionPage.aboutAvodahmedVideo).toBeVisible(),
                expect(pom.ourSolutionPage.howAvodahHeader).toBeVisible(),
                expect(pom.ourSolutionPage.avodahmedAutomates).toBeVisible(),
                expect(pom.ourSolutionPage.automatedEhrIntegrationLabel).toBeVisible(),
                expect(pom.ourSolutionPage.ensuresSeamlessLabel).toBeVisible(),
                expect(pom.ourSolutionPage.clinicalPathwayLabel).toBeVisible(),
                expect(pom.ourSolutionPage.suggestsAppropiateLabel).toBeVisible(),
                expect(pom.ourSolutionPage.iaTranscriptionLabel).toBeVisible(),
                expect(pom.ourSolutionPage.customizesLabel).toBeVisible(),
                expect(pom.ourSolutionPage.startTrialButton).toBeVisible(),
                expect(pom.ourSolutionPage.startTrialButton).toHaveAttribute('href', 'https://www.avodahmed.com/no-risk-trial')
            ]);
        });
    });
});