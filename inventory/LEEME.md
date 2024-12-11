# 1. Navigate to project folder and created local repository


## initialize proyect



$ node -v
$ npm -v

## This command is used to quickly initialize a new Node.js project and create a package.json file with default values.

```
npm init -y
```

## Install npm packages commonly used for Node.js web applications, especially those involving MongoDB and REST-API
```
npm install express mongoose dotenv cors
```

* express: This is a fast, minimalist web framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware, and template engines.   

* mongoose: This is an Object Data Modeling (ODM) library for MongoDB and Node.js. It makes it easier to interact with MongoDB databases by providing a schema-based solution to model your application data. This simplifies how you perform CRUD (Create, Read, Update, Delete) operations and helps structure your data effectively.

* dotenv: This is a zero-dependency module that loads environment variables from a .env file into process.env. This is useful for storing sensitive information like API keys, database credentials, and configuration settings, keeping them out of your codebase and making it easier to manage different environments (development, production, etc.).

* cors: This is a middleware for enabling Cross-Origin Resource Sharing (CORS) in your Express application. CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. This is important for building APIs that can be accessed from different origins (e.g., your frontend running on a different domain).   


##  Development dependencies --- alternative to nodemon: Morgan
```
npm install --save-dev nodemon
```


## Create 
```
touch index.js .env .README.md .gitignore
```


