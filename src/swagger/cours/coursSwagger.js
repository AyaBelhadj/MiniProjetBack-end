/**
 * @swagger
 * tags:
 *   name: Cours
 *   description: Cours management endpoints
 */

/**
 * @swagger
 * /enseignant/createCours:
 *   post:
 *     summary: Create a new cours
 *     tags: [Cours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               id_matiere:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cours successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Cours already exists
 *       401:
 *         description: Mongo error
 */

/**
 * @swagger
 * /enseignant/cours/uploadFile:
 *   post:
 *     summary: Upload a file for a cours
 *     tags: [Cours]
 *     parameters:
 *       
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pdf:
 *                 type: string
 *                 format: binary
 *               
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /enseignant/updateCours:
 *   post:
 *     summary: Update an existing cours
 *     tags: [Cours]
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
 *               id_matiere:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cours updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /enseignant/deleteCours:
 *   post:
 *     summary: Delete a cours
 *     tags: [Cours]
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
 *         description: Cours deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Cours not found
 */

/**
 * @swagger
 * /user/getCoursByNameOrID:
 *   get:
 *     summary: Get cours by name or ID
 *     tags: [Cours]
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
 *         description: Cours found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Cours not found
 */

/**
 * @swagger
 * /user/getAllCours:
 *   get:
 *     summary: Get all cours
 *     tags: [Cours]
 *     responses:
 *       200:
 *         description: Cours found successfully
 *       404:
 *         description: Cours not found
 */

/**
 * @swagger
 * /etudiant/getCoursByNomMatiere:
 *   get:
 *     summary: Get cours by subject name
 *     tags: [Cours]
 *     parameters:
 *       - in: query
 *         name: nom
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cours found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Cours not found for the given subject name
 */

