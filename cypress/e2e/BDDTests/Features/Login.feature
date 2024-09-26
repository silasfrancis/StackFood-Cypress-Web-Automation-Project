Feature: Login


    Scenario: Logging into StackFood Delivery WebApplication
        When User opens url "https://stackfood-admin.6amtech.com/login/restaurant"
        # And Inputs username "<email>" and password "<password>"
        And Inputs username: "test.restaurant@gmail.com" and password: "12345678"
        And User proceed to Login, user must pass the captcha
        Then User should click Login button

        # Examples: 
        # |   username    |  password |
        # |   test.restaurant@gmail.com   |   12345678    |
     