/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/TestGridLoginPage/TestGridLoginPage.cy";
Given("I navigate to the Website", () => {
login.enterURL();
});
When("I click on youtube search bar", () => {
login.clickSignInLink();
});
When("I entered itonics in search bar and clicked on first video", (datatable) => {
datatable.hashes().forEach((element) => {
  login.enterEmailPassword(element.name);
});
});

Then("Validate the youtube url", () => {
login.verifyPageTitle();
});

Then("Validate title of side youtube video clicked & navigate", () => {
    login.verifyUserLoggedIn();
    });
