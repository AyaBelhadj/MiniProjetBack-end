/**
 * @swagger
 * tags:
 *   name: Department
 *   description: Department management endpoints
 */

/**
 * @swagger
 * /departement/createDepartement:
 *   post:
 *     summary: Create a new department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *     responses:
 *       200:
 *         description: Department successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Department already exists
 *       401:
 *         description: SQL Error
 */

/**
 * @swagger
 * /departement/updateDepartement:
 *   post:
 *     summary: Update an existing department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               nom:
 *                 type: string
 *               Chef_Departement:
 *                 type: string
 *     responses:
 *       200:
 *         description: Department updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Department not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departement/archiverDepartement:
 *   post:
 *     summary: Archive a department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *     responses:
 *       200:
 *         description: Department archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departement/activerDepartement:
 *   post:
 *     summary: Activate a department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *     responses:
 *       200:
 *         description: Department activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departement/getDepartement:
 *   get:
 *     summary: Get department by name or ID
 *     tags: [Department]
 *     parameters:
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Department found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Department not found
 */

/**
 * @swagger
 * /departement/getAllDepartements:
 *   get:
 *     summary: Get all departments
 *     tags: [Department]
 *     responses:
 *       200:
 *         description: Departments found successfully
 *       404:
 *         description: Departments not found
 */

