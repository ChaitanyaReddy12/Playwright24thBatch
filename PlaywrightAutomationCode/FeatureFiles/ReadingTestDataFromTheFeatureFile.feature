Feature: Reading Test Data From The feature File

    @regression
    Scenario: verify testadata1 from the Json File
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify testadata from the feature File "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        # And I close the browser

        Examples:
            | Name       | Email              | Phone      | Address   | Wikipedia  |
            | Sai Charan | sai@yahoo.com      | 7890789090 | Hyderabad | Testing    |
            | Sireesha   | Sireesha@gmail.com | 6789067890 | Bangalore | Playwright |
            | Venu       | Venu@outlook.com   | 5678907890 | Chennai   | Typescript |

    @regression
    Scenario Outline: verify testadata1 from the Json File
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify testadata from the feature File "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        # And I close the browser

        Examples:
            | Name    | Email               | Phone      | Address   | Wikipedia  |
            | Roopa   | roopa@yahoo.com     | 7890789090 | Hyderabad | Testing    |
            | Madhu   | Madhu@gmail.com     | 6789067890 | Bangalore | Playwright |
            | Lakshmi | Lakshmi@outlook.com | 5678907890 | Chennai   | Typescript |

                @regression
    Scenario Outline: verify testadata from the pdf File
        Given I launch the browser
        Then I launch the test automation practice application
        And verify testadata from the pdf File
        # And I close the browser

