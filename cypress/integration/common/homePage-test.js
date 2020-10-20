/**********************************************************************************************************************
 * This file contains the Test Cases of the Home Page
 ***********************************************************************************************************************/
import PageInteractions from "../../utilities/page-interactions.js";
//import Utilities from '../../utilities/utilities.js';

let page = new PageInteractions();

describe("Test Cases for the Home Page", function() {
  beforeEach(function() {
    cy.fixture("homePage.json").as("data");
    // alias for the home page json file
    cy.get("@data").then(() => {
    //   // getting the data alias to use it
      cy.visit(this.data.url);
    // launching the home page

    });
  });

  it("Navigating to the home page and validating that the page loads", function() {
  page.urlIsVisible(this.data.urlVisible)
  // asserting that the home page is visited, loaded and its url is correct
  });

 it("Validating that the Login Button is visible", function() {
    page.getElem(this.data.loginButton.selector)
    page.isTxtVisible(this.data.loginButton.text)
   // asserting that the Login Button is visible 
  });

  it("Validating that the Create Account Button is visible", function() {
        page.getElem(this.data.createAccountBtn.selector)
        page.isTxtVisible(this.data.createAccountBtn.text)
   // asserting that the Create Account Button is visible 
  });

  it("Validating that Zwift's logo is visible on the navigation bar", function() {
    page.getElem(this.data.zwiftLogo.selector).should("be.visible")
  //  // asserting that the Zwift's Logo is visible on the navigation bar

  });
  
  it("Validating that the Get Started button is visible on the navigation bar", function() {
    page.getElem(this.data.getStartedBtn).should("be.visible")
  //  // asserting that the Get started button is visible on the navigation bar

  });

  it("Validating that the Training button is visible on the navigation bar", function() {
    page.isTxtVisible(this.data.trainingBtn,this.data.trainingText)
  //  // asserting that the Training button is visible on the navigation bar

  });

  it("Validating that the Run button is visible on the navigation bar", function() {
    page.isTxtVisible(this.data.runBtn,this.data.runText)
  //  // asserting that the Run button is visible on the navigation bar

  });

  it("Validating that the OFF-ROAD button is visible on the navigation bar", function() {
    page.isTxtVisible(this.data.offRoadBtn,this.data.offRoadText)
  // //  // asserting that the OFF-ROAD button is visible on the navigation bar

  });
  it("Validating that the Shop button is visible on the navigation bar", function() {
    page.getElem(this.data.shopBtn).should("be.visible")
  //  // asserting that the Shop button is visible on the navigation bar

  });
  it("Validating that the Events button is visible on the navigation bar", function() {
    page.getElem(this.data.eventsBtn).should("be.visible")
  //  // asserting that the Events button is visible on the navigation bar

  });
  it("Validating that the Support button is visible on the navigation bar", function() {
    page.getElem(this.data.supportBtn).should("be.visible")
  //  // asserting that the Support button is visible on the navigation bar

  });


});
