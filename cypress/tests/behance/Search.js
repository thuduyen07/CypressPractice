import HomePage from "../../pages/behance/HomePage";
import SearchProjectsPage from "../../pages/behance/SearchProjectsPage";

describe("Search", () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
            win.sessionStorage.clear();
          });      
        cy.visit("/", {
            headers: { 'Access-Control-Allow-Origin': 'https://demoqa.com' }
        });
    })

    it("TC_001: should able to search for projects", () => {
        const homePage = new HomePage();
        homePage.searchFor("thuyen09");

        const searchResultsPage = new SearchProjectsPage();
        searchResultsPage.clickOnEachProject();
    })

})