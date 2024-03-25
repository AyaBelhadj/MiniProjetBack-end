/**
 * @swagger
 * tags:
 *   name: Evenement
 *   description: Evenement management endpoints
 */

/**
 * @swagger
 * /user/createEvenement:
 *   post:
 *     summary: Create a new evenement
 *     tags: [Evenement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               id_demandeur:
 *                 type: string
 *               date_evenement:
 *                 type: string
 *                 format: date
 *               id_presentateur:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evenement successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Evenement already exists
 *       401:
 *         description: SQL error
 */

/**
 * @swagger
 * /admin/accepterEvenement:
 *   post:
 *     summary: Accept an evenement
 *     tags: [Evenement]
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
 *         description: Evenement accepted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/updateEvenement:
 *   post:
 *     summary: Update an existing evenement
 *     tags: [Evenement]
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
 *               id_demandeur:
 *                 type: string
 *               date_evenement:
 *                 type: string
 *                 format: date
 *               id_presentateur:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evenement updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverEvenement:
 *   post:
 *     summary: Archive an evenement
 *     tags: [Evenement]
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
 *         description: Evenement archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerEvenement:
 *   post:
 *     summary: Activate an evenement
 *     tags: [Evenement]
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
 *         description: Evenement activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/getEvenementByNameOrID:
 *   get:
 *     summary: Get evenement by name or ID
 *     tags: [Evenement]
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
 *         description: Evenement found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Evenement not found
 */

/**
 * @swagger
 * /user/getAllEvenements:
 *   get:
 *     summary: Get all evenements
 *     tags: [Evenement]
 *     responses:
 *       200:
 *         description: Evenements found successfully
 *       404:
 *         description: Evenements not found
 */

