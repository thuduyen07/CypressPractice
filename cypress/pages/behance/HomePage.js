const SEARCH_TEXTBOX = 'input[name="search"]';

export default class HomePage {

    get searchTextbox() {
        return cy.get(SEARCH_TEXTBOX);
    }

    searchFor = (searchText) => {
        this.searchTextbox
        .type(searchText)
        .type("{enter}");
    }
}
