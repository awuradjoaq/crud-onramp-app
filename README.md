# Project Title

Blog It Up! A CRUD App with a simple UI

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

- Model: Database Layer, Utilized PostGreSQL

- View: Front End, Utilized React with TypeScript

- Controller: Created functions in backend/server/contollers/messages, which invokes the database queries depending on route called (POST, GET, PATCH, DELETE)

## Best Practices Implemented
Commented code where necessary to give high level overview to components/modules

Used helper methods to avoid repeating code

Pushed to GitHub often to keep running track of changes made to the project

Consistent indentation

Parameterized Queries for PostGreSQL

## Screenshots
Log In Page
![Alt text](https://i.imgur.com/IW8WWDw.png "Log In Page")

All Blog Posts Page
![Alt text](https://i.imgur.com/I8hskKo.png "All Blog Posts Page")

New Blog Posts Modal
![Alt text](https://i.imgur.com/0XBdtXF.png "New Blog Posts Modal")

Favorites Page
![Alt text](https://i.imgur.com/tyPmcZH.png "Favorites Page")

Single Blog Post Page
![Alt text](https://i.imgur.com/9wYlD0L.png "Single Blog Post Page")

Search Blog Post Page
![Alt text](hhttps://i.imgur.com/tyPmcZH.png "Search Blog Post Page")










