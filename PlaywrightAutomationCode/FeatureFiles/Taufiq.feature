Feature: assertions

    @regression
    Scenario: verify playwright hard assertions
        Given I launch the browser
        And I verify playwright hard assertions
        And I close the browser

    @regression
    Scenario: verify playwright soft assertions
        Given I launch the browser
        And I verify playwright soft assertions
        And I close the browser