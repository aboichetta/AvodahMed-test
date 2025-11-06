export class TopbarPage {
    constructor(page) {
        this.page = page;
        this.avodahmedLogoButton = page.getByRole('link', {name: 'AvodahMed Logo'}).first();
        this.topbarButton = button => page.getByRole('link', { name: button });
        this.firstScheduleDemoButton = page.getByRole('link', { name: 'SCHEDULE A DEMO' }).first();
        this.focusHeader = page.getByRole('heading', { name: 'Focus on the Patient, Not the Keyboard' });
        this.ourAiSolutionsHeader = page.getByRole('heading', { name: 'Our AI solution transforms physicians' });
        this.doctorReassuringImage = page.locator('[alt="doctor reasssuring patient"]')
        this.everyLabel = page.getByRole('paragraph').filter({ hasText: 'EVERY' });
        this.timeLabel = text => page.getByRole('paragraph').filter({ hasText: text });
        this.countsLabel = page.getByRole('paragraph').filter({ hasText: 'COUNTS' });
        this.secondScheduleDemoButton = page.getByRole('link', { name: 'SCHEDULE A DEMO' }).nth(1);
        this.upButton = page.getByRole('link', { name: 'Up' });
    };
};