export class PracticeFormPage{
    static get firstNameField(){
        return cy.get('[id="firstName"]');
    }

    static get lastNameField(){
        return cy.get('[id="lastName"]');
    }

    static get emailField(){
        return cy.get('[id="userEmail"]');
    }

    static get genderRadioButton(){
        return cy.get('[for="gender-radio-1"]');
    }

    static get mobileField(){
        return cy.get('[id="userNumber"]');
    }

    static get dOB(){
        return cy.get('[id="dateOfBirthInput"]');
    }

    static get monthDropdown(){
        return cy.get('[class="react-datepicker__month-select"]');
    }

    static get yearDropdown(){
        return cy.get('[class="react-datepicker__year-select"]');
    }

    static get datePicker(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }

    static get subjectField(){
        return cy.get('[id="subjectsContainer"]');
    }

    static get selectHobbyMusic(){
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get uploadPicture(){
        return cy.get('[id="uploadPicture"]');
    }

    static get currentAddressField(){
        return cy.get('[id="currentAddress"]');
    }

    static get stateDropdown(){
        return cy.get('[id="state"]');
    }

    static get cityDropdown(){
        return cy.get('[id="city"]');
    }

    static get submitForm(){
        return cy.get('[id="submit"]');
    }
}