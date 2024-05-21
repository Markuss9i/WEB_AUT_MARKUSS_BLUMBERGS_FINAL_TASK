export class BasePage {
    static visit() {
        return cy.visit(this.url);
    }

    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

}