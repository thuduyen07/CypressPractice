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
const ADDRESS_TEXTBOX = "textarea[id='currentAddress']";
const STATE_DROPDOWN = "#state>div>div>div[class*='placeholder']";
const NCR_STATE_OPTION = "#react-select-3-option-0";
const CITY_DROPDOWN = "#city>div>div>div[class*='placeholder']";
const NOIDA_CITY_OPTION = "#react-select-4-option-2";
const SUBMIT_BUTTON = "#submit";

class PracticeFormPage {

    get firstNameTextbox() {
        return cy.get(FIRST_NAME_TEXTBOX);
    }

    get lastNameTextbox(){
        return cy.get(LAST_NAME_TEXTBOX);
    }

    get emailTextbox(){
        return cy.get(EMAIL_TEXTBOX);
    }

    get femaleRadio(){
        return cy.get(FEMALE_RADIO);
    }

    get mobileTextbox(){
        return cy.get(MOBILE_TEXTBOX);
    }

    get dateOfBirthTextbox(){
        return cy.get(DATE_OF_BIRTH_TEXTBOX);
    }

    get monthSelectDatepicker(){
        return cy.get(MONTH_SELECT_DATEPICKER);
    }

    get yearSelectDatepicker(){
        return cy.get(YEAR_SELECT_DATEPICKER);
    }

    get dayDatepickerList(){
        return cy.get(DAY_DATEPICKER_LIST);
    }

    get subjectsTextbox(){
        return cy.get(SUBJECTS_TEXTBOX);
    }

    get hobbiesCheckboxList(){
        return cy.get(HOBBIES_CHECKBOX_LIST);
    }

    get addressTextbox(){
        return cy.get(ADDRESS_TEXTBOX);
    }

    get stateDropdown(){
        return cy.get(STATE_DROPDOWN);
    }

    get ncrStateOption(){
        return cy.get(NCR_STATE_OPTION);
    }

    get cityDropdown(){
        return cy.get(CITY_DROPDOWN);
    }

    get noidaCityOption(){
        return cy.get(NOIDA_CITY_OPTION);
    }

    get submitButton(){
        return cy.get(SUBMIT_BUTTON);
    }
}

module.exports = PracticeFormPage;
