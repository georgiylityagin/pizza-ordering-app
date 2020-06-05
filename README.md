# Test assignment for Innoscripta International.

Deployed to Heroku - https://callofpizza-app.herokuapp.com/

## Description

React web application for online pizza ordering.

App allows you to choose pizzas and drinks from menu, put it into a cart, change quantity of added items and make an order.

Your also can sign in with your google account. In this case the details of your order will be saved to firebase db. If you sign in, the history of your orders will be also availble.

App is persistent - the cart state is stored in browser sessionStorage, so you won't lose your cart items on page update.

The images of pizzas were taken from [Dodo pizza website](https://dodopizza.ru/).

**Used technologies:**
- React
- Redux
- Firebase
- Sass
- Material-UI
- Jest

## Installation

Use these commands to run the app locally:

```
git clone https://github.com/georgiylityagin/pizza-ordering-app.git
cd pizza-ordering-app && npm i
npm run start
```