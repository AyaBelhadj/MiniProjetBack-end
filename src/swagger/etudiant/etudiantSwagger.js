/**
 * @swagger
 * tags:
 *   name: Etudiant
 *   description: Etudiant management endpoints
 */

/**
 * @swagger
 * /admin/createEtudiant:
 *   post:
 *     summary: Create a new etudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               adresse:
 *                 type: string
 *               dateNaiss:
 *                 type: string
 *                 format: date
 *               numTel:
 *                 type: string
 *               email:
 *                 type: string
 *               id_groupe:
 *                 type: string
 *               numInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etudiant successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Etudiant already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /etudiant/updateEtudiant:
 *   post:
 *     summary: Update an existing etudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               adresse:
 *                 type: string
 *               dateNaiss:
 *                 type: string
 *                 format: date
 *               numTel:
 *                 type: string
 *               id_groupe:
 *                 type: string
 *               numInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etudiant updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Etudiant not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /admin/updateEtudiant:
 *   post:
 *     summary: Update an existing etudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               adresse:
 *                 type: string
 *               dateNaiss:
 *                 type: string
 *                 format: date
 *               numTel:
 *                 type: string
 *               id_groupe:
 *                 type: string
 *               numInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etudiant updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Etudiant not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverEtudiant:
 *   post:
 *     summary: Archive an etudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etudiant archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerEtudiant:
 *   post:
 *     summary: Activate an etudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etudiant activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/getEtudiant:
 *   get:
 *     summary: Get etudiant by email or numInscription
 *     tags: [Etudiant]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: numInscription
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Etudiant found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Etudiant not found
 */

/**
 * @swagger
 * /etudiant/getEtudiant:
 *   get:
 *     summary: Get etudiant by email or numInscription
 *     tags: [Etudiant]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: numInscription
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Etudiant found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Etudiant not found
 */

/**
 * @swagger
 * /admin/getallEtudiants:
 *   get:
 *     summary: Get all etudiants
 *     tags: [Etudiant]
 *     responses:
 *       200:
 *         description: Etudiants found successfully
 *       404:
 *         description: Etudiants not found
 */

