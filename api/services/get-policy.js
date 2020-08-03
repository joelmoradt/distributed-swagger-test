

/**
 * @swagger
 * /policies/{id}:
 *    get:
 *      summary: Return one policy given an id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        '200':
 *          description: 'Policy object'
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Policy'
 */
class GetPolicies {

    // foo()
}