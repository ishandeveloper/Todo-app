Feature: Add a todo to the list
    I want to add a Todo to the list

    Scenario: Adding a todo successfully
        Given I open the main page
        When I write "something" in the text field
        And I press the Add button
        Then I see that it was added to the list