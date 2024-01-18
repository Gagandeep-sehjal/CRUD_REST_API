# CRUD_REST_API

Overview:
This repository contains a simple CRUD (Create, Read, Update, Delete) REST API built with Express.js, a popular Node.js web application framework. The API provides endpoints for performing basic operations on a collections.

Features:
Create (POST):
Description: Add a new record to the collection.
Request: Send a POST request with JSON data representing the new record.
![createdoc](https://github.com/Gagandeep-sehjal/CRUD_REST_API/assets/83236527/7827a545-521f-42f2-9cbb-1cb088aa59fe)


Read (GET):
Description: Retrieve a list of all records.
Request: Send a GET request to retrieve the list of records.
![getalldoc](https://github.com/Gagandeep-sehjal/CRUD_REST_API/assets/83236527/a8156b43-115f-48ee-881c-b60e210feb67)

Read (GET) by ID:
Description: Retrieve a specific record by its ID.
Request: Send a GET request with the resource ID as a parameter.
![getdocbyid](https://github.com/Gagandeep-sehjal/CRUD_REST_API/assets/83236527/762ecc47-51fc-4d57-a747-5ce0cc31171e)

Update (PUT):
Description: Update an existing record by its ID.
Request: Send a PUT request with JSON data representing the updated record and the record ID as a parameter.

![updatedoc](https://github.com/Gagandeep-sehjal/CRUD_REST_API/assets/83236527/9b553620-fcd4-41da-8810-c29f62875091)

Delete (DELETE):
Description: Delete a record by its ID.
Request: Send a DELETE request with the record ID as a parameter.
![deletedoc](https://github.com/Gagandeep-sehjal/CRUD_REST_API/assets/83236527/8ffe2ca8-5e2b-4b8a-85d9-a15b441b10c5)

Install dependencies: npm install
Start the server: npm start
Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Body-parser: Node.js body parsing middleware.
Replace your mongo url in db file.
Feel free to use this CRUD API template for your projects. Happy coding!
