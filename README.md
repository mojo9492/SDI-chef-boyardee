#User Stories

##As a Chef, I want to store my recipes so that I can keep track of them.

###Acceptance Criteria: 
[x] Given I am on the landing page, When the page loads, Then I should see a heading that reads "My Recipes" And I should see text beneath the heading that reads "There are no recipes to list".

##As a Chef, I want to be able to add recipes to my collection so that I may have a record of them.

###Acceptance Criteria: 
[x] Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.

###Acceptance Criteria: 
[ ] Given I am on the landing page, When I click the add recipe button, Then I should see a form with fields: "Recipe Name" and "Recipe Instructions" And the "Add Recipe" button should no longer be on the screen.

##As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes".

###Acceptance Criteria: 
[x] Given I have clicked the add recipe button, When I enter the details of a recipe in the form And I click the submit button Then I should see that recipe's name in the list under a heading that reads "My Recipes".


[ ] As a chef and a mother of twelve, I want to be able to see the instructions of a recipe I’ve added so that I can make dinner tonight
  Given I have added multiple recipes to my list,
  When I click on a recipe title,
  Then I see the instructions for that recipe underneath the recipe title
  
[ ] As Chef Emeril Lagasse, I want to be able to edit my recipe names and instructions so that they reflect all of the improvements I've made to my recipes
  Given I have clicked on a specific recipe on the list and am looking at its instructions,
  When I click `edit` on the recipe name OR instructions,
  Then I can alter value of the field I clicked
  Given I have edited one or more fields of a specific recipe,
  When I click `save`,
  Then I am returned to the view of the recipe with the updated fields