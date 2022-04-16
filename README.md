# Team MACK

# Something Musical (SMTHNG MSCL) App - Project 3

- FrontEnd Development

## Description

## Search for the artists, events and/or venues you favorite, connect with other fans of similar music taste.

# USER STORY

**As A User:**

- Have the ability to find events, venues or artists that interests them
- Have the ability to keep track of their favorite artists
- Events, Venues, Artists are all (models) that have the ability to be commented on by the user
- Users should be able to comment, like and maintain a favorites log of songs of their interest and on other songs as well

# Technologies Used

- JavaScript
- React
- Bootstrap
- Axios
- MongoDB
- Mongoose

### Tasks:

| Command   | Effect                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------ |
| npm start | Starts a development server with nodemon that automatically refreshes when you change something. |

# Routes Table

| Endpoint           | Component        | `AuthenticatedRoute`? |
| ------------------ | ---------------- | --------------------- |
| `/sign-up`         | `SignUp`         | No                    |
| `/sign-in`         | `SignIn`         | No                    |
| `/change-password` | `ChangePassword` | Yes                   |
| `/sign-out`        | `SignOut`        | Yes                   |

| Name            | Path           | Action Verb | What it does                                         |
| --------------- | -------------- | ----------- | ---------------------------------------------------- |
| SEARCH INDEX    | /search        | GET         | Search API for performers, events, or venues courses |
| FAVORITES INDEX | /favorites     | GET         | Shows all current favorited picks                    |
| CREATE          | /favorites     | POST        | Creates a new favorite                               |
| DELETE          | /favorites/:id | DELETE      | Deletes favorite of indicated id                     |
| CREATE          | /profile       | POST        | Creates a user profile                               |
| EDIT            | /profile       | PATCH       | Edit and updates a user profile                      |
| CREATE          | /profile       | PATCH       | Edit and updates a user profile                      |

# Installation Instructions

1. Fork and clone this repository
2. [Fork and Clone](https://github.com/katherine-kania/team-mack-api) this repository as well and follow the instructions in that README
3. In your terminal, run npm install to install node packages
4. Run npm start to start running the client

# WireFrames

![img](wireframe.jpg)
