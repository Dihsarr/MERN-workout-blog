# Workout Friend 
---
## Project Overview
---
This is a full-stack project website built with the **MERN** stack. The website supports user authentication, user-specific workouts, interaction with databases, and requesting data from a self-made API.
## Features
---
### User-friendly UI
![Project image](https://dihsarr.github.io/images/Workout_Tracker.png) 
 
A clean, modern, easy to use and navigate UI.
### User Authentication
---
Handles user auth though the use of JWT (JSON Web Tokens). User information is hashed with the help of [bcrypt](https://www.npmjs.com/package/bcrypt). and stored in a MongoDB database.
### A Custom API
---
Information is requested from the database through the use of an API. When a GET request is sent to the server the API responds with JSON according to what was requested
### Adding and Deleting workouts
---
This site supports the creation and deletion of workouts from both the database and the local React stat. These two are kept in sync at all times.