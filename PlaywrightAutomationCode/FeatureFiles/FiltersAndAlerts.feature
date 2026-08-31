Feature: Filters And Alerts

    Background: common steps
        Given I launch the browser

    @regression
    Scenario: verify playwright filters
        And I verify playwright filters
        And I close the browser

    @regression
    Scenario: verify simple alert
        And I verify simple alert
        And I close the browser

    @regression
    Scenario: verify confirmation alert ok
        And I verify confirmation alert ok
        And I close the browser

    @regression
    Scenario: verify confirmation alert cancel
        And I verify confirmation alert cancel
        And I close the browser

    @regression
    Scenario: verify Prompt alert ok without text
        And I verify Prompt alert ok without text
        And I close the browser

    @regression
    Scenario: verify Prompt alert ok with text
        And I verify Prompt alert ok with text
        And I close the browser

    @regression
    Scenario: verify Prompt alert cancel
        And I verify Prompt alert cancel
        And I close the browser


