/**
 * @swagger
 * tags:
 *   name: Groupe
 *   description: Groupe management endpoints
 */

/**
 * @swagger
 * /admin/createGroupe:
 *   post:
 *     summary: Create a new groupe
 *     tags: [Groupe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               id_filiere:
 *                 type: string
 *     responses:
 *       200:
 *         description: Groupe successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Groupe already exists
 *       401:
 *         description: SQL error
 */

/**
 * @swagger
 * /admin/group/uploadFile:
 *   post:
 *     summary: Upload file for groupe
 *     tags: [Groupe]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
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
 * /admin/updateGroupe:
 *   post:
 *     summary: Update an existing groupe
 *     tags: [Groupe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               moyenne:
 *                 type: number
 *               id_filiere:
 *                 type: string
 *     responses:
 *       200:
 *         description: Groupe updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverGroupe:
 *   post:
 *     summary: Archive a groupe
 *     tags: [Groupe]
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
 *         description: Groupe archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerGroupe:
 *   post:
 *     summary: Activate a groupe
 *     tags: [Groupe]
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
 *         description: Groupe activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/getGroupe:
 *   get:
 *     summary: Get groupe by name or ID
 *     tags: [Groupe]
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
 *         description: Groupe found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Groupe not found
 */

/**
 * @swagger
 * /admin/getallGroupes:
 *   get:
 *     summary: Get all groupes
 *     tags: [Groupe]
 *     responses:
 *       200:
 *         description: Groupes found successfully
 *       404:
 *         description: Groupes not found
 */

/**
 * @swagger
 * /admin/getGroupsByFiliere:
 *   get:
 *     summary: Get groups by filiere
 *     tags: [Groupe]
 *     parameters:
 *       - in: query
 *         name: id_filiere
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Groups found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Groups not found
 */

