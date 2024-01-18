# CRUD_REST_API

Overview
This repository contains a simple CRUD (Create, Read, Update, Delete) REST API built with Express.js, a popular Node.js web application framework. The API provides endpoints for performing basic operations on a collections.

Features
Create (POST):
Description: Add a new record to the collection.
Request: Send a POST request with JSON data representing the new record.

Read (GET):
Description: Retrieve a list of all records.
Request: Send a GET request to retrieve the list of records.

Read (GET) by ID:
Description: Retrieve a specific record by its ID.
Request: Send a GET request with the resource ID as a parameter.

Update (PUT):
Description: Update an existing record by its ID.
Request: Send a PUT request with JSON data representing the updated record and the record ID as a parameter.


Delete (DELETE):
Description: Delete a record by its ID.
Request: Send a DELETE request with the record ID as a parameter.

Install dependencies: npm install
Start the server: npm start
Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Body-parser: Node.js body parsing middleware.
Replace your mongo url in db file.
Feel free to use this CRUD API template for your projects. Happy coding!
