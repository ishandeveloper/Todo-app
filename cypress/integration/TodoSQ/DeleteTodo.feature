Feature: Delete a todo from the list
    I want to delete a todo from the list

    Scenario: Deleting a todo successfully
        Given I open the main page
        And I have a todo on the list
        When I click on the todo item thas was added to the list
        Then I see that it was deleted from the list