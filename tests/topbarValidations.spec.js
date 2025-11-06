const { test, expect } = require('../fixtures.js');

test.describe('Topbar Validations', async () => {
  test('Validate the contents and functionalities of the topbar section', async ({ page, pom }) => {

    await test.step('Validate the elements of the page', async () => {
      await Promise.all([
        expect(pom.topbarPage.avodahmedLogoButton).toBeVisible(),
        expect(pom.topbarPage.topbarButton('The Problem')).toBeVisible(),
        expect(pom.topbarPage.topbarButton('Our Solution')).toBeVisible(),
        expect(pom.topbarPage.topbarButton(/^Success Stories$/)).toBeVisible(),
        expect(pom.topbarPage.topbarButton('How it Works')).toBeVisible(),
        expect(pom.topbarPage.topbarButton('FAQs')).toBeVisible(),
        expect(pom.topbarPage.topbarButton('Get Started')).toBeVisible(),
        expect(pom.topbarPage.firstScheduleDemoButton).toBeVisible(),
        expect(pom.topbarPage.focusHeader).toBeVisible(),
        expect(pom.topbarPage.ourAiSolutionsHeader).toBeVisible(),
        expect(pom.topbarPage.doctorReassuringImage).toBeVisible(),
        expect(pom.topbarPage.everyLabel).toBeVisible(),
        expect(pom.topbarPage.timeLabel(/^SECOND$/)).toBeVisible(),
        expect(pom.topbarPage.timeLabel(/^MINUTE$/)).toBeVisible(),
        expect(pom.topbarPage.timeLabel(/^HOUR$/)).toBeVisible(),
        expect(pom.topbarPage.secondScheduleDemoButton).toBeVisible(),
        expect(pom.topbarPage.firstScheduleDemoButton).toHaveAttribute('href', 'https://www.avodahmed.com/schedule-a-demo'),
        expect(pom.topbarPage.secondScheduleDemoButton).toHaveAttribute('href', 'https://www.avodahmed.com/schedule-a-demo')
      ]);
    });

    await test.step('Validate that any of the topbar buttons scrolls the page down', async () => {
      const initialPosition = await page.evaluate(() => window.scrollY);
      await pom.topbarPage.topbarButton('The Problem').click();
      await page.waitForFunction(
        previous => window.scrollY > previous,
        initialPosition
      );
      const finalPosition = await page.evaluate(() => window.scrollY);
      expect(finalPosition).toBeGreaterThan(initialPosition);
    });

    await test.step('Validate that the right side button scrolls the page up', async () => {
      await page.reload();
      await expect(pom.topbarPage.focusHeader).toBeVisible();
      await page.evaluate(() => window.scrollBy(0, 500));
      const initialPosition = await page.evaluate(() => window.scrollY);
      await pom.topbarPage.upButton.click();
      await page.waitForFunction(
        previous => window.scrollY < previous,
        initialPosition
      );
      const finalPosition = await page.evaluate(() => window.scrollY);
      expect(initialPosition).toBeGreaterThan(finalPosition);
    });
  });
});