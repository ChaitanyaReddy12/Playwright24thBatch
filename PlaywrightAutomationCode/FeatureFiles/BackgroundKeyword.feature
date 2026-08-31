
Feature: Playwright regressions

    Background:  common steps
        Given I launch the browser

    @regression
    Scenario: verify playwright regression
        And I verify playwright regressions
        And I close the browser

    @regression
    Scenario: verify playwright regressions part2
        And I verify playwright regressions part2
        And I close the browser

    @regression
    Scenario: verify playwright regressions part3
        And I verify playwright regressions part3
        And I close the browser
