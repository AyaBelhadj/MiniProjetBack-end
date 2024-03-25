/**
 * @swagger
 * tags:
 *   name: Filiere
 *   description: Filiere management endpoints
 */

/**
 * @swagger
 * /admin/createFiliere:
 *   post:
 *     summary: Create a new filiere
 *     tags: [Filiere]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               niveau:
 *                 type: string
 *               id_departement:
 *                 type: string
 *     responses:
 *       200:
 *         description: Filiere successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Filiere already exists
 *       401:
 *         description: SQL error
 */

/**
 * @swagger
 * /admin/updateFiliere:
 *   post:
 *     summary: Update an existing filiere
 *     tags: [Filiere]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               nom:
 *                 type: string
 *               niveau:
 *                 type: string
 *               id_departement:
 *                 type: string
 *     responses:
 *       200:
 *         description: Filiere updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverFiliere:
 *   post:
 *     summary: Archive a filiere
 *     tags: [Filiere]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Filiere archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerFiliere:
 *   post:
 *     summary: Activate a filiere
 *     tags: [Filiere]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Filiere activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/getFiliere:
 *   get:
 *     summary: Get filiere by ID
 *     tags: [Filiere]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filiere found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Filiere not found
 */

/**
 * @swagger
 * /admin/getallFilieres:
 *   get:
 *     summary: Get all filieres
 *     tags: [Filiere]
 *     responses:
 *       200:
 *         description: Filieres found successfully
 *       404:
 *         description: Filieres not found
 */

