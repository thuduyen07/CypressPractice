require('cypress-xpath');

const DATA_FOLDER_PATH = '../data/demoqa/';
const STUDENT_INFORMATION_FILE = DATA_FOLDER_PATH + 'StudentInformation.json';
const INVALID_STUDENT_INFORMATION_FILE = DATA_FOLDER_PATH + 'InvalidStudentInformation.json';

import PracticeFormPage from "../../pages/demoqa/PracticeFormPage";
import SubmittedFormModal from "../../modals/demoqa/SubmittedFormModal";

describe("Practice Form", () => {

    beforeEach(() => {
        blockAllAds();
        openFormPage();
    });

    it("TC_001: should able to submit the form after filling the form with valid information", () => {
        cy.fixture(STUDENT_INFORMATION_FILE).then((student) => {
            const practiceFormPage = new PracticeFormPage();
            const submittedFormModal = new SubmittedFormModal();
            practiceFormPage.fillForm(student);
            submittedFormModal.verifyFormSubmissionSuccessfully(student);
        });
    })

    it("TC_002: should unable to submit the form after filling the form with invalid information - missing mobile number", () => {
        cy.fixture(INVALID_STUDENT_INFORMATION_FILE).then((student) => {
            const practiceFormPage = new PracticeFormPage();
            const submittedFormModal = new SubmittedFormModal();
            practiceFormPage.fillForm(student);
            submittedFormModal.verifyFormSubmissionFailed();
        })
    });

    const blockAllAds = () => {
        cy.intercept('GET', '**/*', (req) => {
            if (req.url.includes('ad')) {
                req.destroy();
            }
        });
    }

    const openFormPage = () => {
        cy.visit("automation-practice-form", {
            headers: { 'Access-Control-Allow-Origin': 'https://demoqa.com' }
        });
    }

})
