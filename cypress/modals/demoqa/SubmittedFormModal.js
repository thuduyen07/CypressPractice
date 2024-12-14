const MODAL_TITLE_LABEL = ".modal-title";
const STUDENT_NAME_LABEL = "//td[text()='Student Name']";
const STUDENT_EMAIL_LABEL = "//td[text()='Student Email']";
const GENDER_LABEL = "//td[text()='Gender']";
const MOBILE_LABEL = "//td[text()='Mobile']";
const DATE_OF_BIRTH_LABEL = "//td[text()='Date of Birth']";
const SUBJECTS_LABEL = "//td[text()='Subjects']";
const HOBBIES_LABEL = "//td[text()='Hobbies']";
const PICTURE_LABEL = "//td[text()='Picture']";
const ADDRESS_LABEL = "//td[text()='Address']";
const STATE_AND_CITY_LABEL = "//td[text()='State and City']";
const CLOSE_BUTTON = "#closeLargeModal";

const MODAL_TITLE = "Thanks for submitting the form";

export default class SubmittedFormModal {

    get modalTitle() {
        return cy.get(MODAL_TITLE_LABEL);
    }

    get studentNameValue() {
        return cy.xpath(STUDENT_NAME_LABEL).next();
    }

    get studentEmailValue() {
        return cy.xpath(STUDENT_EMAIL_LABEL).next();
    }

    get genderValue() {
        return cy.xpath(GENDER_LABEL).next();
    }

    get mobileValue() {
        return cy.xpath(MOBILE_LABEL).next();
    }

    get dateOfBirthValue() {
        return cy.xpath(DATE_OF_BIRTH_LABEL).next();
    }

    get subjectsValue() {
        return cy.xpath(SUBJECTS_LABEL).next();
    }

    get hobbiesValue() {
        return cy.xpath(HOBBIES_LABEL).next();
    }

    get pictureValue() {
        return cy.xpath(PICTURE_LABEL).next();
    }

    get addressValue() {
        return cy.xpath(ADDRESS_LABEL).next();
    }

    get stateAndCityValue() {
        return cy.xpath(STATE_AND_CITY_LABEL).next();
    }

    get closeButton() {
        return cy.get(CLOSE_BUTTON);
    }

    verifyFormSubmissionSuccessfully = (student) => {
        this.modalTitle
            .should("have.text", MODAL_TITLE);

        this.studentNameValue
            .should("have.text", student.FirstName + " " + student.LastName);

        this.studentEmailValue
            .should("have.text", student.Email);

        this.genderValue
            .should("have.text", student.Gender);

        this.mobileValue
            .should("have.text", student.Mobile);

        this.dateOfBirthValue.should("have.text", student.DateOfBirth);

        this.subjectsValue
            .should("have.text", student.Subjects);

        this.hobbiesValue
            .should("have.text", student.Hobbies);

        this.pictureValue
            .should("have.text", student.Picture);

        this.addressValue
            .should("have.text", student.Address);

        this.stateAndCityValue
            .should("have.text", student.State + " " + student.City);
    }

    verifyFormSubmissionFailed = () => {
        this.modalTitle
            .should("not.exist");
    }

}

