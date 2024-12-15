import GalleryPage from "./GalleryPage";

const SEARCH_PROJECT_LINKS = "a[class^='ProjectCover']"

export default class SearchProjectsPage {
    get searchResultLinks() {
        return cy.get(SEARCH_PROJECT_LINKS);
    }

    clickOnEachProject = () => {
        const galleryPage = new GalleryPage();
        this.searchResultLinks.each((link) => {
            cy.wrap(link)
                .should("exist")
                .click();

            galleryPage.scrollToTheEndToView();

            cy.go('back', { timeout: 1000 });
        });
    }
}