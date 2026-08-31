
Feature: Cross Browser Testing

    @regression
    Scenario: verify playwright regressions in chrome
        Given I launch the browser
        And I verify playwright regressions part4
        And I close the browser

    @regression
    Scenario: verify playwright regressions in firefox
        Given I launch the browser in firefox
        And I verify playwright regressions part4
        And I close the browser

    @regression
    Scenario: verify playwright regressions in safari
        Given I launch the browser in safari
        And I verify playwright regressions part4
        And I close the browser

    @regression
    Scenario: verify playwright regressions in headless browser
        Given I launch the browser in headless browser
        And I verify playwright regressions part4
        And I close the browser



