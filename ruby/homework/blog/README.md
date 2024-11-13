# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Blog App Enhanced
## Introduction:
In this weekend code challenge, you'll take your blog app to the next level by giving it a category makeover. Embark on this creative journey by implementing the following enhancements in your blog application.

### Requirements:
Validation: Ensure that articles must belong to a category. Validate that each article is associated with a category during article creation and editing. (you need to update Article model belongs_to association)

### Category Descriptions:
 These descriptions can provide additional context or information about the category's content, display it on category index as italicized (in view).

### Category Description Rake Task:
 Add rake task to backfill existing categories description.

### C - Action:
 Create the ability for signed-in users to create a category. Include view and form as partial.

### R - Action: Add the ability for signed-in users to read a category by navigating to localhost:3000/categories/:id. Include view.

### U - Action:
 Add the ability for signed-in users to edit a category. Include view. Add edit button (on show view).

### D - Action:
 Add the ability for signed-in users to delete a category. Include view. Add delete button (on show view).

### Category Count:
 Display the number of articles within each category next to the category name in the category index page. This provides a quick overview of each category's content.

### Category Field on Article Forms:
 Ensure the article creation and editing forms contain a form field for selecting a category. Modify your Article model to handle this association. The form should allow users to select a category when creating or editing an article. (you need to use a <select> element)

### Category Migration:
 Create a migration to add a priority_level column to the categories table. This column is an integer that represents the priority of each category (e.g. numbers like 1, 2, 3 for priority levels when using integers)

### Style:
 Style the blog app to be user-friendly and aesthetically pleasing. This is a very important point. Remember to separate style files for each view. (look up how to style using css for Rails app)

### README:
 Update your README.md file to describe your project, include any rake tasks that need to be run, and general info about your app. Read this article for basic writing and formatting syntax.

