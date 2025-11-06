export class OurSolutionsPage {
    constructor(page) {
        this.page = page;
        this.aboutAvodahmedVideo = page.locator('[aria-label="Avodah Promo Video for Nsight Video Player"]').first();
        this.howAvodahHeader = page.getByRole('heading', { name: 'How AvodahMed, an Ambient Scribe, Solves This Problem' });
        this.avodahmedAutomates = page.getByRole('paragraph').filter({ hasText: 'AvodahMed automates' });
        this.automatedEhrIntegrationLabel = page.getByRole('paragraph').filter({ hasText: 'Automated EHR Integration' });
        this.ensuresSeamlessLabel = page.getByRole('paragraph').filter({ hasText: 'Ensures seamless documentation that aligns with your workflows.' });
        this.clinicalPathwayLabel = page.getByRole('paragraph').filter({ hasText: 'Clinical Pathway Guidance' });
        this.suggestsAppropiateLabel = page.getByRole('paragraph').filter({ hasText: 'Suggests appropriate care pathways' });
        this.iaTranscriptionLabel = page.getByRole('paragraph').filter({ hasText: 'AI Transcription' });
        this.customizesLabel = page.getByRole('paragraph').filter({ hasText: 'Customizes to your preferred note styles for flexible documentation.' });
        this.startTrialButton = page.getByRole('link', { name: 'Start Your No Risk Trial' }).first();
    };
};