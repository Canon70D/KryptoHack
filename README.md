# CRYPTO TRACKER

## Description

A crypto application where users can view live cryptocurrency data and create a favourites list to be able to keep a saved history of coins they like for future reference. Users can also view comments made by other users and leave comments of their own.

User can also view the changes in the crypto market without creating a portfolio on the website dashboard.

## Technologies

Programming languages and frameworks: Javascript, html, css, bootstrap, nodeJS, ExpressJS, Mysql

Node packages: Axios, Bcrypt, Sequelize, Dotenv, Express-handlebars, Express-session, Faker

## Getting Started

Install the project dependencies:

```bash
npm install
```

Create the .env file inside project directory with the below file structure:

```md
DB_NAME=''
DB_PASSWORD=''
DB_USER=''
```

Start the application:

```bash
npm start
```

## Functionality

### User Account

The user can create an account by entering a username, email and password and these will be saved into the database. The password will use a bcrypt password hashing for extra security.

![signup page](/src/signup.png)

Once the account is created, they are then able to log into the application by entering their email address and password. Within the backend logic there is an algorithm that will check if the details of both email and password match what is saved in the database and if they don't match then the user cannot access the project, if they do match then they are taken to the homepage.

![password check algorithm](/src/passwordCheck.png)

### Homepage

The homepage consists of a list of current cryptocurrencies and the following data- name, current price (USD), day volume and marketcap. There is also a navbar which has the following pages ready to click and the user will be taken there- Home, Profile, Favourites, Contact and the logout button. The user can either click on the cryptocurrencies name and will be taken to that coins profile or they can click on the favourite button (little heart icon) that will save that crypto to their favourites list. The heart icon will turn red once it is saved so the user knows it is already saved to their favourites list.

![homepage](/src/homepage.png)

### Profile

The profile page shows the users name and profile picture, further work we will add in more user input on this page.

### Favourites Page

The favourites page has a list of the users clicked-to-favourites cryptocurrencies. The user will be able to consistently come back to this page to reference any coins that they were interested in for later use. It shows the cryptocurrencies data.

![favourites page](/src/favourites.png)

### Coin Profile

Each coin has their own profile page which has it's data on it and also a section where users can write their own comments, while viewing other users comments on there. This can have further development where users can trade the coin or have greater interactions with other users.

![coin profile](/src/coinProfile.png)

## MVC

### Models

Sequelize was used for the models and creating properties to be able to store into the database as well as forming associations.

![model](/src/model.png)

### Views

Handlebars were used for page template and rendering.

![handlebars](/src/handlebar.png)

### Controllers

Express was used to create routes for the REST APIs within the application.

![route](/src/route.png)

## Deployed Heroku URL

https://kryptohack.herokuapp.com/login

## GitHub Repo

https://github.com/Canon70D/project-2
