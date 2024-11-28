const MODAL_TITLE = ".modal-title";
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

class SubmittedFormModal {
    
    get modalTitle() {
        return cy.get(MODAL_TITLE);
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

}

module.exports = SubmittedFormModal;
