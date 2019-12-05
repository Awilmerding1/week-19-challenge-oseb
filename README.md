# Week 19 Challenge


## React/Redux Blog App


### Project Instructions

In this challenge we will create a react/redux application that makes GET and POST requests to a Rails API. We will be using this API: https://github.com/Awilmerding1/blog-api. Go ahead and clone the repository, run `bundle install`, `rake db:migrate` and then start the backend with `rails s`. Once the rails server is running, you can check the endpoints. For example, if you want to check the index endpoint and your rails server is running on localhost:3000, you would navigate to `localhost:3000/api/v1/posts`.

Remember that you will need to be running your frontend and backend servers at all times so that the two can talk to one another!

This application will have four components:
- App
- BlogPosts
- BlogPostForm
- NavBar

To complete this challenge you will practice working with the following concepts:
- Lifecycle Methods
- Async React
- Class vs. Functional Components
- Client-Side Routing


The files for each component have been set up but you will need to create each component and implement the functionality below. NOTE: when you start the application for the first time you will receive an error because there is not yet an App component to be rendered!

## App Component

The App component will be responsible for requesting the data from the API. Which lifecycle method would make sense to use for this request? The App component will also need to store the fetched data.

You should also set up your routes inside the App component. You should have three routes: one for your People component, one for your Number component, and one for your NavBar component.

You should NOT directly render any of the components. What path should you use for your NavBar component if you ALWAYS want it rendered on the screen?

Consider: What type of component (functional or class) will App need to be and why?

## NavBar Component

The NavBar component is responsible for holding two Links: one for the People component and one for the Number component.  

Consider: What type of component (functional or class) should NavBar be and why?

## People Component

The People component should render the `name` and `craft` values of each person.

Consider: What type of component (functional or class) should People be and why?

## Number Component

The Number component should render the number of people currently in space.

Consider: What type of component (functional or class) should Number be and why?

## Getting Started

To start install the necessary packages, run `npm install` and then run `npm start` to start the application.

NOTE: when you start the application for the first time you will receive an error because there is not yet an App component to be rendered!



https://github.com/Awilmerding1/blog-api
