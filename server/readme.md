# MERNPRESS API

> Backend API for MERNPRESS application, which is a multi-vendor e-commerce website

## Usage

Add .env file and update values/settings to your own

## Install

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in production mode
npm start
```

### Version: 1.0.0

# MernPress Backend API Specifications

Create the backend for a e-commerce website. All of the functionality below needs to be fully implmented in this project.

### Users & Authentication

- Authentication will be ton using JWT/cookies
  - JWT and cookie should expire in 30 days
- User registration
  - Register as a "user" or "admin"
  - Once registered, a token will be sent along with a cookie (token = xxx)
  - Passwords must be hashed
- User login
  - User can login with email and password
  - Plain text password will compare with stored hashed password
  - Once logged in, a token will be sent along with a cookie (token = xxx)
- User logout
  - Cookie will be sent to set token = none
- Get user
  - Route to get the currently logged in user (via token)
- Password reset (lost password)
  - User can request to reset password
  - A hashed token will be emailed to the users registered email address
  - A put request can be made to the generated url to reset password
  - The token will expire after 10 minutes
- Update user info
  - Authenticated user only
  - Separate route to update password

### Products

- List all products in the database
  - Pagination
  - Select specific fields in result
  - Limit number of results
  - Filter by fields
- Get single product
- Create new product
  - Authenticated users only
  - Must have the role "admin"
  - Field validation via Mongoose
- Update products
  - admin only
  - Validation on update
- Delete product
  - admin only
- Calculate the average cost of all category for a product
- Calculate the average rating from the reviews for a product

### Category

- List all category for products
- List all category in general
  - Pagination, filtering, etc
- Get single category
- Create new category
  - Authenticated users only
  - Must have the role "admin"
  - Only the admin can create a category for a product
- Update category
  - admin only
- Delete category
  - admin only

### Reviews

- List all reviews for a product
- List all reviews in general
  - Pagination, filtering, etc
- Get a single review
- Create a review
  - Authenticated users only
- Update review
  - Owner only
- Delete review
  - Owner only

### Order

### Shop

### Dashboard Sttuf

- Title logo
- Basic Style (Main color , background color, Padding, Margin)
- Banner
- Product slidder
- category slidder
- Blog

## Security

- Encrypt passwords and reset tokens
- Prevent NoSQL injections
- Add headers for security (helmet)
- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution
- Use cors to make API public

## Documentation

- Use Swagger to create documentation
- for swagger /api-docs for the api

## Deployment (Digital Ocean) [Click here for complete deployment](https://gist.github.com/skg1998/9dff22f9fe8746f20c94371aededb2a9)

- Push to Github
- Create a droplet
- Clone repo on to server
- Use PM2 process manager
- Enable firewall (ufw) and open needed ports
- Create an NGINX reverse proxy for port 80
- Connect a domain name
- Install an SSL using Let's Encrypt

## Code Related Suggestions

- NPM scripts for dev and production env
- Config file for important constants
- Use controller methods with documented descriptions/routes
- Error handling middleware
- Authentication middleware for protecting routes and setting user roles
- Validation using Mongoose and no external libraries
- Use async/await
- Create a database seeder to import and destroy data
- Payment Gateway Integration
- multer cloudnary for fileupload
