import {format} from "date-fns";

const DATA_FOLDER_PATH = "cypress/data/demoqa/";

const FIRST_NAME_TEXTBOX = "input[placeholder='First Name']";
const LAST_NAME_TEXTBOX = "input[placeholder='Last Name']";
const EMAIL_TEXTBOX = "[id*='userEmail']>div>input";
const FEMALE_RADIO = "#gender-radio-2";
const MOBILE_TEXTBOX = "#userNumber";
const DATE_OF_BIRTH_TEXTBOX = "#dateOfBirthInput";
const MONTH_SELECT_DATEPICKER = "select[class='react-datepicker__month-select']";
const YEAR_SELECT_DATEPICKER = ".react-datepicker__year-select";
const DAY_DATEPICKER_LIST = "div[class^='react-datepicker__day']";
const SUBJECTS_TEXTBOX = "#subjectsInput";
const HOBBIES_CHECKBOX_LIST = "input[id*='hobbies']";
const PICTURE_CHOOSE_FILE_BUTTON = "#uploadPicture";
const ADDRESS_TEXTBOX = "textarea[id='currentAddress']";
const STATE_DROPDOWN = "#state>div>div>div[class*='placeholder']";
const NCR_STATE_OPTION = "#react-select-3-option-0";
const CITY_DROPDOWN = "#city>div>div>div[class*='placeholder']";
const NOIDA_CITY_OPTION = "#react-select-4-option-2";
const SUBMIT_BUTTON = "#submit";

const Gender = {
    FEMALE: "Female",
    MALE: "Male",
}

class PracticeFormPage {

    get firstNameTextbox() {
        return cy.get(FIRST_NAME_TEXTBOX);
    }

    get lastNameTextbox() {
        return cy.get(LAST_NAME_TEXTBOX);
    }

    get emailTextbox() {
        return cy.get(EMAIL_TEXTBOX);
    }

    get femaleRadio() {
        return cy.get(FEMALE_RADIO);
    }

    get mobileTextbox() {
        return cy.get(MOBILE_TEXTBOX);
    }

    get dateOfBirthTextbox() {
        return cy.get(DATE_OF_BIRTH_TEXTBOX);
    }

    get monthSelectDatepicker() {
        return cy.get(MONTH_SELECT_DATEPICKER);
    }

    get yearSelectDatepicker() {
        return cy.get(YEAR_SELECT_DATEPICKER);
    }

    get dayDatepickerList() {
        return cy.get(DAY_DATEPICKER_LIST);
    }

    get subjectsTextbox() {
        return cy.get(SUBJECTS_TEXTBOX);
    }

    get hobbiesCheckboxList() {
        return cy.get(HOBBIES_CHECKBOX_LIST);
    }

    get pictureChooseFileButton() {
        return cy.get(PICTURE_CHOOSE_FILE_BUTTON);
    }

    get addressTextbox() {
        return cy.get(ADDRESS_TEXTBOX);
    }

    get stateDropdown() {
        return cy.get(STATE_DROPDOWN);
    }

    get ncrStateOption() {
        return cy.get(NCR_STATE_OPTION);
    }

    get cityDropdown() {
        return cy.get(CITY_DROPDOWN);
    }

    get noidaCityOption() {
        return cy.get(NOIDA_CITY_OPTION);
    }

    get submitButton() {
        return cy.get(SUBMIT_BUTTON);
    }

    fillForm = (student) => {

        this.firstNameTextbox
            .type(student.FirstName)
            .should("have.value", student.FirstName);

        this.lastNameTextbox
            .type(student.LastName)
            .should("have.value", student.LastName);

        this.emailTextbox
            .type(student.Email)
            .should("have.value", student.Email);

        if (student.Gender == Gender.FEMALE) {
            this.femaleRadio
                .check({ force: true })
                .should("be.checked");
        }

        if (student.Mobile != "") {
            this.mobileTextbox
                .scrollIntoView();
            this.mobileTextbox
                .focus()
                .should("be.enabled")
                .type(student.Mobile, { forece: true }, { delay: 100 })
                .should("have.value", student.Mobile);
        }

        this.dateOfBirthTextbox.click();

        let birthDay = new Date(student.DateOfBirth);
        this.monthSelectDatepicker
            .select(birthDay.getMonth().toString());

        this.yearSelectDatepicker
            .select(birthDay.getFullYear().toString());

        this.dayDatepickerList
            .contains(birthDay.getDate())
            .first()
            .click();

        let expectedDateOfBirth = format(birthDay, "dd MMM yyyy");
        this.dateOfBirthTextbox
            .should("have.value", expectedDateOfBirth);

        this.subjectsTextbox
            .scrollIntoView();
        this.subjectsTextbox
            .should("be.enabled")
            .focus()
            .type(student.Subjects)
            .type("{enter}", { force: true });

        this.hobbiesCheckboxList.each(hobby => {
            cy.wrap(hobby)
                .scrollIntoView()
                .should("be.enabled")
                .check({ force: true });
        })

        this.pictureChooseFileButton
            .selectFile(DATA_FOLDER_PATH + student.Picture);

        this.addressTextbox
            .scrollIntoView()
            .should("be.enabled")
            .focus()
            .type(student.Address, { force: true })
            .should("have.value", student.Address);

        this.stateDropdown
            .scrollIntoView()
            .should("exist")
            .click({ force: true });
        this.ncrStateOption
            .should("exist")
            .click({ force: true });

        this.cityDropdown
            .scrollIntoView()
            .should("exist")
            .click();
        this.noidaCityOption
            .should("exist")
            .click({ force: true });

        this.submitButton
            .scrollIntoView()
            .should("be.visible")
            .click();
    }

}

module.exports = PracticeFormPage;
