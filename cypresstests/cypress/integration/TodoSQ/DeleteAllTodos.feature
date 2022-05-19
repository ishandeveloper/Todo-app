Feature: Delete all todos from the list
    I want to delete all todos from the list

    Scenario: Deleting all todos successfully
        Given I open the main page
        And I have todos on the list
        When I click on the delete all button
        Then I see that all todos were deleted from the list