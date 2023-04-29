## Animal Controller

This code contains an `AnimalController` class which has various methods for performing CRUD (Create, Read, Update, Delete) operations on the `Animal` model. It also imports the `Animal` and `Slaughterhouse` models from the `sequelize` package.

### Methods

#### `createAnimal(req, res)`

This method creates a new `Animal` record in the database. It first validates the request body to ensure that the `type` field is present. If the validation fails, it returns a `400` error response with a message indicating that the animal type should be specified. If the validation succeeds, it creates a new `Animal` record with the provided `animalId`, `weight`, `type`, and `SlaughterhouseId`. If the creation is successful, it returns a `201` success response with the created animal record and a success message. If the creation fails, it returns a `500` error response with an error message.

#### `findOneAnimal(req, res)`

This method retrieves a single `Animal` record from the database based on the `id` parameter provided in the request URL. If the record is found, it returns a `200` success response with the retrieved animal record. If the record is not found, it returns a `500` error response with an error message.

#### `findAllAnimals(req, res)`

This method retrieves all `Animal` records from the database. If the retrieval is successful, it returns a `200` success response with a message indicating that a list of all animals has been retrieved and an array of animal records. If the retrieval fails, it returns a `500` error response with an error message.

#### `countAnimalsBySlaughterHouseName(req, res)`

This method counts the number of `Animal` records associated with a specific `Slaughterhouse` record based on the `name` parameter provided in the request URL. If the `Slaughterhouse` record is found, it retrieves all `Animal` records associated with that `Slaughterhouse` record and counts the number of records. If the count is greater than zero, it returns a `200` success response with a message indicating the number of animals found and an array of animal records. If the count is zero, it throws a `404` error with a message indicating that the animal was not found. If the `Slaughterhouse` record is not found, it returns a `404` error response with an error message.

#### `findAnimalBySlaughterhouseName(req, res)`

This method retrieves a single `Animal` record associated with a specific `Slaughterhouse` record based on the `name` parameter provided in the request URL. If the `Slaughterhouse` record is found, it retrieves the first `Animal` record associated with that `Slaughterhouse` record. If the record is found, it returns a `200` success response with the retrieved animal record. If the record is not found, it throws a `404` error with a message indicating that the animal was not found. If the `Slaughterhouse` record is not found, it returns a `404` error response with an error message.

#### `updateAnimal(req, res)`

This method updates an existing `Animal` record in the database based on the `id` parameter provided in the request URL. If the update is successful, it returns a `200` success response with a message indicating that the animal was updated successfully. If the update fails, it returns a `500` error response with an error message.

#### `deleteAnimal(req, res)`

This method deletes an existing `Animal` record from the database based on the `id` parameter provided in the
