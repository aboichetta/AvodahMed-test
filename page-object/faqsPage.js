export class FaqsPage {
    constructor(page) {
        this.page = page;
        this.watchFaqsButton = page.getByRole('button', { name: 'Watch FAQs' });
        this.haveQuestionsHeader = page.getByRole('heading', { name: 'Have Questions?' }).first();
        this.gotAnswersHeader = page.getByRole('heading', { name: `We've Got Answers.` });
        this.faqsInput = page.getByRole('textbox', { name: 'Looking for something?' });
        this.showingResultsLabel = page.locator('[data-hook="text-search-results-found"]');
        this.questionsHeader = question => page.getByRole('heading', { name: question });
        this.answerParagraph = answer => page.locator('[data-id="content-viewer"]').filter({ hastext: answer }).first();
        this.StillHaveQuestionsHeader = page.getByRole('heading', { name: 'Still Have Questions?' });
        this.contactUsButton = page.getByRole('link', { name: 'Contact Us' });
    };
};