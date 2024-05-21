import { BasePage } from "../pageObjects/BasePage"
import { FormSubmittedPage } from "../pageObjects/FormSubmittedPage";
import { PracticeFormPage } from "../pageObjects/PracticeFormPage";

describe("Demoqa", () => {
    context("Automation Practice Form", () => {
        beforeEach(() => {
            BasePage.visit();
        });

        it("Fill out the form", () => {
            PracticeFormPage.firstNameField.type("Markuss");
            PracticeFormPage.lastNameField.type("Blumbergs");
            PracticeFormPage.emailField.type("randomEmail@gmail.com");
            PracticeFormPage.genderRadioButton.click();
            PracticeFormPage.mobileField.type("1234567890");
            PracticeFormPage.dOB.click();
            PracticeFormPage.monthDropdown.select("February");
            PracticeFormPage.yearDropdown.select("1930");
            PracticeFormPage.datePicker.click();
            PracticeFormPage.subjectField.type("Economics{enter}");
            PracticeFormPage.selectHobbyMusic.click();
            PracticeFormPage.uploadPicture.selectFile('Alpha1.png');
            PracticeFormPage.currentAddressField.type("Random Street -22");
            PracticeFormPage.stateDropdown.type("NCR{enter}");
            PracticeFormPage.cityDropdown.type("Delhi{enter}");
            PracticeFormPage.submitForm.click();

            //Validation
            FormSubmittedPage.tableText.should('contain.text', "Markuss Blumbergs");
            FormSubmittedPage.tableText.should('contain.text', "randomEmail@gmail.com");
            FormSubmittedPage.tableText.should('contain.text', "Male");
            FormSubmittedPage.tableText.should('contain.text', "1234567890");
            FormSubmittedPage.tableText.should('contain.text', "28 February,1930");
            FormSubmittedPage.tableText.should('contain.text', "Economics");
            FormSubmittedPage.tableText.should('contain.text', "Music");
            FormSubmittedPage.tableText.should('contain.text', "Alpha1.png");
            FormSubmittedPage.tableText.should('contain.text', "Random Street -22");
            FormSubmittedPage.tableText.should('contain.text', "NCR Delhi");
            
        });
    });
});