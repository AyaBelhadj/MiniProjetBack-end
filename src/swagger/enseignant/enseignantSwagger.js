/**
 * @swagger
 * tags:
 *   name: Enseignant
 *   description: Enseignant management endpoints
 */

/**
 * @swagger
 * /admin/createEnseignant:
 *   post:
 *     summary: Create a new enseignant
 *     tags: [Enseignant]
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
 *               matricule:
 *                 type: string
 *               grade:
 *                 type: string
 *               email:
 *                 type: string
 *               departementEns:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enseignant successfully registered
 *       400:
 *         description: Bad request
 *       404:
 *         description: Departement not found
 *       409:
 *         description: Enseignant or user already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/enseignant/uploadFile:
 *   post:
 *     summary: Upload emploi_enseignant file
 *     tags: [Enseignant]
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
 *         description: Enseignant file uploaded successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/updateEnseignant:
 *   post:
 *     summary: Update an existing enseignant
 *     tags: [Enseignant]
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
 *               matricule:
 *                 type: string
 *               grade:
 *                 type: string
 *               departementEns:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enseignant updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Enseignant not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /enseignant/updateEnseignant:
 *   post:
 *     summary: Update an existing enseignant
 *     tags: [Enseignant]
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
 *               matricule:
 *                 type: string
 *               grade:
 *                 type: string
 *               departementEns:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enseignant updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Enseignant not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/archiverEnseignant:
 *   post:
 *     summary: Archive an enseignant
 *     tags: [Enseignant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricule:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enseignant archived successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /admin/activerEnseignant:
 *   post:
 *     summary: Activate an enseignant
 *     tags: [Enseignant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricule:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enseignant activated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /enseignant/getEnseignant:
 *   get:
 *     summary: Get enseignant by email or matricule
 *     tags: [Enseignant]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: matricule
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enseignant found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Enseignant not found
 */

/**
 * @swagger
 * /admin/getEnseignant:
 *   get:
 *     summary: Get enseignant by email or matricule
 *     tags: [Enseignant]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: matricule
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enseignant found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Enseignant not found
 */

/**
 * @swagger
 * /admin/getAllEnseignants:
 *   get:
 *     summary: Get all enseignants
 *     tags: [Enseignant]
 *     responses:
 *       200:
 *         description: Enseignants found successfully
 *       404:
 *         description: Enseignants not found
 */

