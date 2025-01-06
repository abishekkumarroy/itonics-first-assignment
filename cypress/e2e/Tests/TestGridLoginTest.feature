Feature: Login into the site with valid data
  Background: Navigate to the Website
      Given I navigate to the Website
  Scenario: Login into the application with valid data
      When I click on youtube search bar
      And I entered itonics in search bar and clicked on first video
          | name   | 
          | itonics |
      Then Validate the youtube url
      Then Validate title of side youtube video clicked & navigate
      
      