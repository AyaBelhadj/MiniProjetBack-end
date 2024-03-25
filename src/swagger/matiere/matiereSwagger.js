/**
 * @swagger
 * tags:
 *   name: Matiere
 *   description: Matiere management endpoints
 */

/**
 * @swagger
 * /admin/createMatiere:
 *   post:
 *     summary: Create a new matiere
 *     tags: [Matiere]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               id_enseignant:
 *                 type: string
 *     responses:
 *       200:
 *         description: Matiere successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Matiere already exists
 *       401:
 *         description: SQL error
 */

/**
 * @swagger
 * /admin/updateMatiere:
 *   post:
 *     summary: Update an existing matiere
 *     tags: [Matiere]
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
 *               id_enseignant:
 *                 type: string
 *     responses:
 *       200:
 *         description: Matiere updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerMatiere:
 *   post:
 *     summary: Activate a matiere
 *     tags: [Matiere]
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
 *         description: Matiere activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverMatiere:
 *   post:
 *     summary: Archive a matiere
 *     tags: [Matiere]
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
 *         description: Matiere archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/getMatiereByNameOrID:
 *   get:
 *     summary: Get matiere by name or ID
 *     tags: [Matiere]
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
 *         description: Matiere found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Matiere not found
 */

/**
 * @swagger
 * /user/getAllMatieres:
 *   get:
 *     summary: Get all matieres
 *     tags: [Matiere]
 *     responses:
 *       200:
 *         description: Matieres found successfully
 *       404:
 *         description: Matieres not found
 */

