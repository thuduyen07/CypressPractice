require('cypress-xpath');

const STUDENT_INFORMATION_FILE = '../data/StudentInformation.json';
const INVALID_STUDENT_INFORMATION_FILE = '../data/InvalidStudentInformation.json';
const STUDENT_PICTURE_FILE = 'cypress/data/Dannie.jpeg';

import PracticeFormPage from "../pages/PracticeFormPage";
import SubmittedFormModal from "../pages/modals/SubmittedFormModal";

describe("Practice Form", () => {

    beforeEach(() => {
        blockAllAds();
        openFormPage();
    });

    it("TC_001: should able to submit the form after filling the form with valid information", () => {
        cy.fixture(STUDENT_INFORMATION_FILE).then((student) => {
            fillForm(student, new PracticeFormPage());
            verifyFormSubmissionSuccessfully(student);
        });
    })

    it("TC_002: should unable to submit the form after filling the form with invalid information - missing mobile number", () => {
        cy.fixture(INVALID_STUDENT_INFORMATION_FILE).then((student) => {
            fillForm(student);
            verifyFormSubmissionFailed();
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

    const fillForm = (student) => {

        let practiceFormPage = new PracticeFormPage();

        practiceFormPage.firstNameTextbox
            .type(student.FirstName)
            .should("have.value", student.FirstName);

        practiceFormPage.lastNameTextbox
            .type(student.LastName)
            .should("have.value", student.LastName);

        practiceFormPage.emailTextbox
            .type(student.Email)
            .should("have.value", student.Email);

        if (student.Gender == "Female") {
            practiceFormPage.femaleRadio
                .check({ force: true })
                .should("be.checked");
        }

        if (student.Mobile != "") {
            practiceFormPage.mobileTextbox
                .scrollIntoView();
            practiceFormPage.mobileTextbox
                .focus()
                .should("be.enabled")
                .type(student.Mobile, { forece: true }, { delay: 100 })
                .should("have.value", student.Mobile);
        }

        practiceFormPage.dateOfBirthTextbox.click();

        let birthDay = new Date(student.DateOfBirth);
        practiceFormPage.monthSelectDatepicker
            .select(birthDay.getMonth().toString());

        practiceFormPage.yearSelectDatepicker
            .select(birthDay.getFullYear().toString());

        practiceFormPage.dayDatepickerList
            .contains(birthDay.getDate())
            .first()
            .click();

        practiceFormPage.dateOfBirthTextbox
            .should("have.value", "05 Nov 1999");

        practiceFormPage.subjectsTextbox
            .scrollIntoView();
        practiceFormPage.subjectsTextbox
            .should("be.enabled")
            .focus()
            .type(student.Subjects)
            .type("{enter}", { force: true });

        practiceFormPage.hobbiesCheckboxList.each(hobby => {
            cy.wrap(hobby)
                .scrollIntoView()
                .should("be.enabled")
                .check({ force: true });
        })

        cy.get("#uploadPicture").selectFile(STUDENT_PICTURE_FILE);

        practiceFormPage.addressTextbox
            .scrollIntoView()
            .should("be.enabled")
            .focus()
            .type(student.Address, { force: true })
            .should("have.value", student.Address);

        practiceFormPage.stateDropdown
            .scrollIntoView()
            .should("exist")
            .click({ force: true });
        practiceFormPage.ncrStateOption
            .should("exist")
            .click({ force: true });

        practiceFormPage.cityDropdown
            .scrollIntoView()
            .should("exist")
            .click();
        practiceFormPage.noidaCityOption
            .should("exist")
            .click({ force: true });

        practiceFormPage.submitButton
            .scrollIntoView()
            .should("be.visible")
            .click();
    }

    const verifyFormSubmissionSuccessfully = (student) => {
        let submittedFormModal = new SubmittedFormModal();
        submittedFormModal.modalTitle
            .should("have.text", "Thanks for submitting the form");

        submittedFormModal.studentNameValue
            .should("have.text", student.FirstName + " " + student.LastName);

        submittedFormModal.studentEmailValue
            .should("have.text", student.Email);

        submittedFormModal.genderValue
            .should("have.text", student.Gender);

        submittedFormModal.mobileValue
            .should("have.text", student.Mobile);

        submittedFormModal.dateOfBirthValue.should("have.text", student.DateOfBirth);

        submittedFormModal.subjectsValue
            .should("have.text", student.Subjects);

        submittedFormModal.hobbiesValue
            .should("have.text", student.Hobbies);

        submittedFormModal.pictureValue
            .should("have.text", student.Picture);

        submittedFormModal.addressValue
            .should("have.text", student.Address);

        submittedFormModal.stateAndCityValue
            .should("have.text", student.State + " " + student.City);
    }

    const verifyFormSubmissionFailed = () => {
        let submittedFormModal = new SubmittedFormModal();
        submittedFormModal.modalTitle.should("not.exist");
    }
})
