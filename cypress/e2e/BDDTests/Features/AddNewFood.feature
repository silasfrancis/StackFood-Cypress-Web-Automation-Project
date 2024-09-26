Feature: Add New Food

    Background: Logging in
        When User opens url "https://stackfood-admin.6amtech.com/login/restaurant"
        # And Inputs username "<email>" and password "<password>"
        And Inputs username "test.restaurant@gmail.com" and password "12345678"
        And User proceed to Login, user must pass the captcha
        Then User should click Login button 
        # Example:
        # |   email | password|
        # |   test.restaurant@gmail.com   |   12345678    |
       

    Scenario: Adding new Foods for sale
    Given User clicks on Food Module on the Side Menu
    And Adds New Food
    When User Inputs Food Descriptions and Category
    And Validates Inputs 
    Then User inputs Time for selling and Tags
    And Submits Food

    

