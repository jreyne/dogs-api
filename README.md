# dogs-api
This is an api for managing a dog database.

## Getting Started
This section is intended for software developers.  If you have rights to the repo, simply clone. If not, you may fork and clone the repo.

After you fork, you can clone:

```
git clone <clone url>
cd dogs-api
npm install
```

## Environment Variables

You'll need to create a local .env file to store your application's secrets. Follow these steps to generate and store the secrets. Secrets can be passwords, user IDs, etc...


`PORT` - Create a `PORT` environment variable. Set the value to an unused port number for your machine.


`HOSTNAME` - Create a `HOSTNAME` environment variable. This will be the .url to the database platform you wish to access.


`DBNAME`- Create a `DBNAME` environment variable.  This is the name of the database you wish to interrogate.

*.env* file example:

```
PORT=5000
COUCH_HOSTNAME=https://username:password@databaseurl/
COUCH_DBNAME=yourDatabaseName
```
## Start the api
Run the following command to start the api on the designated port.

`npm start`

## Endpoints
CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

## Create a dog - POST /dogs
Add a dog to the collection of dogs by providing a new dog resource in the request body.

*Example*


### POST /dogs

```
{
    "name": "Nugget",
    "breed": "golden retriever",
    "owner": "Will",
    "age": 18
}
```

## Get a single dog by id - GET /dogs/{id}
Retrieve a single dog resource from the collection of dogs.

*Example*

### GET /dogs/dogID

`{
    "_id": "dog-golden-retriever-nugget",
    "_rev": "1-3980jf09jferfj90jg0",
    "type": "dog",
    "name": "nugget",
    "breed": "golden retriever",
    "owner": "Will Adkins",
    "age": 18
}`

## Update a dog - PUT /dogs/{id}

*Example*

Let's update the entire dog resource and decrease Nugget's age from 18 to 11 years old.

### PUT /dogs/Nugget
```
{
    "_id": "dog-golden-retriever-nugget",
    "_rev": "1-3980jf09jferfj90jg0",
    name": "Nugget",
    "breed": "golden retriever",
    "owner": "Will Adkins",
    "age": 11
}
```

## Delete a dog - DELETE /dogs/{id}
Delete a dog given an id.

*Example*

Let's delete the entire Nugget dog resource.

```
DELETE /dog-golden-retriever-nugget
```
