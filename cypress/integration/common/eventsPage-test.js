/**********************************************************************************************************************
 * This file contains the Test Cases of the Events Page
 ***********************************************************************************************************************/
import PageInteractions from "../../utilities/page-interactions.js";
//import Utilities from '../../utilities/utilities.js';
let page = new PageInteractions();

describe("Test Cases for the Events Page", function() {
  beforeEach(function() {
    cy.fixture("eventsPage.json").as("data");
    // alias for the events page json file
    cy.get("@data").then(() => {
      // getting the data alias to use it
    });
  });

  it("Navigating to the events page and validating that the page loads", function() {
    cy.visit(this.data.url);
    // launching the home page
    page.clickBtn(this.data.eventsButton.selector);
    // Navigating to the events page
    page.isTxtVisible(this.data.eventsPage);
    // asserting that we navigated to the events page and it is loaded
    page.urlIsVisible(this.data.urlVisible);
    // asserting that the events page url is correct
  });

  it("User selects All Sports from sports dropdown ", function() {
    cy.visit(this.data.eventsURL);
    page.getElem(this.data.sport.selector).select(this.data.sport.type.cycling);
    page
      .getElem(this.data.sport.selector)
      .select(this.data.sport.type.allSports);
    page.isTxtVisible(this.data.sport.label.cycling);
    //   asserting that the sport selected is cycling and the sport's label is cycling
    page.isTxtVisible(this.data.sport.label.running);
    //   asserting that the sport selected is running and the sport's label is running
  });

  it("User selects Cycling from sports dropdown ", function() {
    cy.visit(this.data.eventsURL);
    page.getElem(this.data.sport.selector).select(this.data.sport.type.cycling);
    page.isTxtVisible(this.data.sport.label.cycling);
    //  asserting that the sport selected is cycling and the sport's label is cycling
  });

  it("User selects Running from sports dropdown ", function() {
    cy.visit(this.data.eventsURL);
    page.getElem(this.data.sport.selector).select(this.data.sport.type.running);
    page.isTxtVisible(this.data.sport.label.running);
    //   // asserting that the sport selected is running and the sport's label is running
  });

  it("User selects Intensity:B from the dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.intensity.selector)
      .select(this.data.intensity.typeB.text);
    page.isTxtVisible(
      this.data.intensity.typeB.text
    );

    //   //   // asserting that the intensity selected is B

    page.getElem(this.data.intensity.typeB.labelSelector).should("be.visible");
    //   //   // asserting that the icon of intensity B  is visible
  });

  it("User selects Intensity:C from the dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.intensity.selector)
      .select(this.data.intensity.typeC.text);
    page.isTxtVisible(
      this.data.intensity.typeC.text
    );
    //   //   // asserting that the intensity selected is C
    page.getElem(this.data.intensity.typeC.labelSelector).should("be.visible");
    //   //   // asserting that the icon of intensity C  is visible
  });

  it("User selects Intesitiy:D from the dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.intensity.selector)
      .select(this.data.intensity.typeD.text);
    page.isTxtVisible(
      this.data.intensity.typeD.text
    );
    //   //   // asserting that the intensity selected is D
    page.getElem(this.data.intensity.typeD.labelSelector).should("be.visible");
    //   //   // asserting that the icon of intensity D  is visible
  });

  it("User selects a Morning time from start times dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.startTime.selector)
      .select(this.data.startTime.moriningText);
    page.isTxtVisible(
      this.data.startTime.moriningText
    );
    //   //   // asserting that the start Time selected is Morning
    page.isTxtVisible(this.data.startTime.amText);
    //   //   // asserting that the icon of start Time "AM"  is visible
    page.txtNotVisible(this.data.startTime.pmText);
    //   //   // asserting that the icon of start Time "PM"  is not visible
  });

  it("User selects an Afternoon time from start times dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.startTime.selector)
      .select(this.data.startTime.afternoonText);
    page.isTxtVisible(
      this.data.startTime.afternoonText
    );
    //   //   // asserting that the start Time selected is Afternoon
    page.isTxtVisible(this.data.startTime.pmText);
    //   //   // asserting that the icon of start Time "PM"  is visible
    page.txtNotVisible(this.data.startTime.amText);
    //   //   // asserting that the icon of start Time "AM"  is not visible
  });

  it("User selects All Start Times from start times dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.startTime.selector)
      .select(this.data.startTime.allStartTimes);
    page.isTxtVisible(
      this.data.startTime.allStartTimes
    );
    //   //   // asserting that the startTime selected is All Start Times
    page.isTxtVisible(this.data.startTime.pmText);
    //   //   // asserting that the icon of start Time "PM"  is visible
    page.isTxtVisible(this.data.startTime.amText);
    //   //   // asserting that the icon of start Time "AM"  is  visible
  });

  it("User selects an available event :Group Workout from events dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.eventType.selector)
      .select(this.data.eventType.groupWorkout);
    page.isTxtVisible(this.data.eventType.groupWorkout);
    //   //  asserting that the event "Group Workout"  is selected and visible
  });

  it("User selects an unavailable event :Fondo from events dropdown", function() {
    cy.visit(this.data.eventsURL);
    page
      .getElem(this.data.eventType.selector)
      .select(this.data.eventType.fondo);
    page.txtNotVisible(this.data.eventType.fondoSelector);
    //  asserting that the event "Fondo"  is selected and no visible events are "Fondo"
    page.isTxtVisible(this.data.eventType.noResults);
    //  validating that "no results" pop up  is shown for the event "Fondo"
  });

  it("User selects a valid combination of sport with an event,intensity,and time", function() {
    cy.visit(this.data.eventsURL);

    page.getElem(this.data.sport.selector).select(this.data.sport.type.cycling);
    page.isTxtVisible(
      this.data.sport.label.cycling
    );
    //  asserting that the sport selected is cycling and the sport's label is cycling
    page
      .getElem(this.data.eventType.selector)
      .select(this.data.eventType.groupWorkout);
    page.isTxtVisible(this.data.eventType.groupWorkout);
    //   //  asserting that the event "Group Workout"  is selected and visible
    page
      .getElem(this.data.intensity.selector)
      .select(this.data.intensity.typeE.text);
    page.isTxtVisible(this.data.intensity.typeE.text);

    //   //   // asserting that the intensity selected is E

    page
      .getElem(this.data.startTime.selector)
      .select(this.data.startTime.afternoonText);
    page.isTxtVisible(
      this.data.startTime.afternoonText
    );
    //   //   // asserting that the start Time selected is Afternoon

    page.isTxtVisible(this.data.startTime.pmText);

    //   //   // asserting that the icon of start Time "PM"  is visible
    page.txtNotVisible(this.data.startTime.amText);

      //   // asserting that the icon of start Time "AM"  is not visible
  });
  it("User selects an invalid combination of sport with an event, intensity,and time", function() {
    cy.visit(this.data.eventsURL);

    page.getElem(this.data.sport.selector).select(this.data.sport.type.cycling);
    page.isTxtVisible(
      this.data.sport.label.cycling
    );
    //  asserting that the sport selected is cycling and the sport's label is cycling
    page
      .getElem(this.data.startTime.selector)
      .select(this.data.startTime.afternoonText);
    page.isTxtVisible(
      this.data.startTime.afternoonText
    );
    //   //   // asserting that the start Time selected is Afternoon

    page.isTxtVisible(this.data.startTime.pmText);

    //   //   // asserting that the icon of start Time "PM"  is visible
    page.txtNotVisible(this.data.startTime.amText);

  //   //   //   // asserting that the icon of start Time "AM"  is not visible
    page
      .getElem(this.data.intensity.selector)
      .select(this.data.intensity.typeC.text);
    page.isTxtVisible(this.data.intensity.typeC.text);

  //   //   //   // asserting that the intensity selected is C
  page
  .getElem(this.data.eventType.selector)
  .select(this.data.eventType.groupWorkout);
page.isTxtVisible(this.data.eventType.groupWorkout);
//   //  asserting that the event "Group Workout"  is selected and visible
    page.isTxtVisible(this.data.eventType.noResults);
  // //   //  validating that "no results" pop up  is shown for this combination 
  
  });
});
