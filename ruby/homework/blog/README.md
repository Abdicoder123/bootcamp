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
 Ensure the article creation and editing forms contain a form field for selecting a category. Modify your Article model to handle this association. The form should allow users to select a category when creating or editing an article. (you need to use a select element)

### Category Migration:
 Create a migration to add a priority_level column to the categories table. This column is an integer that represents the priority of each category (e.g. numbers like 1, 2, 3 for priority levels when using integers)

### Style:
 Style the blog app to be user-friendly and aesthetically pleasing. This is a very important point. Remember to separate style files for each view. (look up how to style using css for Rails app)

### README:
 Update your README.md file to describe your project, include any rake tasks that need to be run, and general info about your app. Read this article for basic writing and formatting syntax.

### Code Challenge:
Did some fair bit of the code challenge up to some of the CRUD stuff but not all of the steps mainly worked with some of the create functionality and the index and fixing up the controller for authors among other things. Set up the databse for authors and edited articles to include that database.

## Added Authors:
Added authors that has articles and every article belongs to an author. It has an index page and it also has a form page to create it. Also when crating an article you choose from the existing authors.

## Added Devise Users
Added the devise model to the blog app which comes preset with a lot of routes and html pages where we sign up and log in and keep track of the user that's logged in the app.

## Added Donations
Added a donation feature that's takes in a donation. The donation form is tied to an api that confirms the validity of a card and has some features. It then submits the donation based on the amount submitted for the feature. In the process of adding addditional features for a recurring donation which I excluded because it made the page bug out.

## Added some Jquery files
One of the smaller features which is toggling the button within the article show page that can hide all the comments and text in which the Vanilla JS was replaced with JQuery.
