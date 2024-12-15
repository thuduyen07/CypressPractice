const COPY_RIGHT_LABEL = "label[class^='Copyright-label']";

export default class GalleryPage {

    get copyRightLabel() {
        return cy.get(COPY_RIGHT_LABEL);
    }

    scrollToTheEndToView = () => {
        this.copyRightLabel.scrollIntoView({duration: 10000});
    }
}