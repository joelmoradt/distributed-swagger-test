# Splitted Swagger Test

## Objective
Isolated test and proposal to organize swagger documentation on gainbridge project. Repo consist on 2 folders simulating store repos and API repos.

## Folders

```
├── api/
├── store/
```

## Workflow

1. Each repo generates a swagger document (OAS3) for just certain part of the final swagger

    1.1 `store` repo will generate only the swagger for the models (`components/schemas`)
    
    1.2 `api` repo will generate only the swagger for the endpoints (`paths`) part of swagger

2. `api` repo will join the 2 json files into one single file and validate the schema

## Generating swagger for node projects

For node projects we are using `swagger-jsdoc` which generates swagger docs using js docs, the code for every enpdoint will look like this:

i.e 

```js
/**
 * @swagger
 * /policies:
 *    get:
 *      summary: Return all policies
 *      responses:
 *        '200':
 *          description: Array of policies
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Policy'
 */
class GetPolicies {

    // foo()

}
```

> We still can $ref other models but they wouldn't be defined on the APIs repo but the models repo.

## Working UI

Go to the `api` folder and run:

```
yarn install
yarn start
```

Swagger UI can be seen at `http://localhost:3001/` with an example