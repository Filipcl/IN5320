 Feature: Basic features work

    Background:
        Given the user is on the root page

    Scenario: The user chooses "Programs" from the menu
        When the user clicks on the "Programs" menu item
        Then a list of all available "programs" should be shown

    Scenario: The user chooses "Data sets" from the menu
        When the user clicks on the "Data sets" menu item
        Then a list of all available "data sets" should be shown

    Scenario: The user selects the first program
        When the user clicks on the "Programs" menu item
        Then a list of all available "programs" should be shown
        And clicks the "program" with the id "lxAQ7Zs9VYR"
        Then details should show the "id" "lxAQ7Zs9VYR"
        And details should show the "name" "Antenatal care visit"
        And details should show the "created" "2016-04-12T15:30:43.783"

    Scenario: The user selects the last program
        When the user clicks on the "Programs" menu item
        Then a list of all available "programs" should be shown
        And clicks the "program" with the id "MoUd5BTQ3lY"
        Then details should show the "id" "MoUd5BTQ3lY"
        And details should show the "name" "XX MAL RDT - Case Registration"
        And details should show the "created" "2018-08-28T12:22:43.057"

    Scenario: The user selects the first data set
        When the user clicks on the "Data sets" menu item
        Then a list of all available "data sets" should be shown
        And clicks the "data set" with the id "lyLU2wR22tC"
        Then details should show the "id" "lyLU2wR22tC"
        And details should show the "name" "ART monthly summary"
        And details should show the "created" "2012-06-10T00:36:10.036"

    Scenario: The user selects the last data set
        When the user clicks on the "Data set" menu item
        Then a list of all available "data sets" should be shown
        And clicks the "data set" with the id "OsPTWNqq26W"
        Then details should show the "id" "OsPTWNqq26W"
        And details should show the "name" "TB/HIV (VCCT) monthly summary"
        And details should show the "created" "2011-12-24T12:24:22.881"