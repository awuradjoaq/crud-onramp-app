# Project Startup
cd client npm start
cd backend npm start, tsc -w

# Project Title

Blog It Up! A CRUD App with a simple UI!

# Architectural Overview

- Log In/ Sign Up Page - Displays before authentication
- App - Main component, renders all other components
  - Search - Allows for search by username or title
  - Favorites - Displays all blog posts favorited by user
    - Favorites Page - Page which renders favorited posts
    - Favorites Post - Renders single favorited post
  - Home Button - Calls to API to get all posts saved in database
  - New Blog Post - Creates new blog post and submits to be saved in database
  - Profile Page - Shows user photo, username
    - Log Out Page - Allows user to log out of app
  - Main Page - Displays all Blog Posts
    - Blog Posts - Renders single blog post
      - Post Display - Displays full body of post upon click of post title
        - Update Blog Post - Renders option to delete blog post depending on authentication
        - Update Blog - Updates single blog post
    - Favorite Button - Allows users to favorite blog posts
    - Delete Blog Posts - Allows user to delete blog post they created

# Architectural Designs Leveraged

Model View Controller:

- Model (Data): Database Layer, Utilized PostGreSQL

- View (Interface to View and Modify Data): Front End, Utilized React with TypeScript

- Controller (Various actions that can be performed on data): Created functions in backend/server/contollers/messages, which invokes the database queries depending on route called (POST, GET, PATCH, DELETE)

# Best Practices Implemented
- Commented code where necessary to give high level overview to components/modules

- Used helper methods to avoid repeating code

- Pushed to GitHub often to keep running track of changes made to the project

- Consistent indentation

- Parameterized Queries for PostGreSQL

## Screenshots

Log In/ Sign Up Page Page: First page users sees, needs to be authenticated to access other resources, Authentication is handled via Auth0

![Alt text](https://i.imgur.com/IW8WWDw.png "Log In Page")

Authentication Service Page: Via Auth0, can either sign up/log in with your Google account or email

![Alt text](https://i.imgur.com/zA3RfZH.png "Authentication Service Page")

All Blog Posts Page: First page user sees upon authentication, displays all blog posts

![Alt text](https://i.imgur.com/I8hskKo.png "All Blog Posts Page")

New Blog Posts Modal: By clicking on the 'Create New Blog Post' button, this modal will pop up and allow you to create a new blog post

![Alt text](https://i.imgur.com/0XBdtXF.png "New Blog Posts Modal")

Favorites Page: By clicking on the favorites button you can see a list of all the post you've favorites

![Alt text](https://i.imgur.com/nVJVEQ2.png "Favorites Page")

Single Blog Post Page: Navigate to this page by clicking on the title of a blog to see the full post

![Alt text](https://i.imgur.com/9wYlD0L.png "Single Blog Post Page")

Search Blog Post Page: Search the blogs by username of title!

![Alt text](https://i.imgur.com/tyPmcZH.png "Search Blog Post Page")

Profile/Log Out Component: Click on profile photo to get option to log out and return back to log in page

![Alt text](https://i.imgur.com/2ZkTZOv.png "Profile/Log Out Component")










