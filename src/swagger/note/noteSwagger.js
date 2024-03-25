/**
 * @swagger
 * tags:
 *   name: Note
 *   description: Note management endpoints
 */

/**
 * @swagger
 * /enseignant/createNote:
 *   post:
 *     summary: Create a new note
 *     tags: [Note]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_etudiant:
 *                 type: string
 *               id_matiere:
 *                 type: string
 *               note:
 *                 type: number
 *               annee_universitaire:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note successfully registered
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /enseignant/updateNote:
 *   post:
 *     summary: Update an existing note
 *     tags: [Note]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               id_etudiant:
 *                 type: string
 *               id_matiere:
 *                 type: string
 *               note:
 *                 type: number
 *               annee_universitaire:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Note not found
 */

/**
 * @swagger
 * /enseignant/deleteNote:
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Note]
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
 *         description: Note deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Note not found
 */

/**
 * @swagger
 * /user/getNoteByID:
 *   get:
 *     summary: Get a note by ID
 *     tags: [Note]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note found successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Note not found
 */

/**
 * @swagger
 * /user/getAllNotes:
 *   get:
 *     summary: Get all notes
 *     tags: [Note]
 *     responses:
 *       200:
 *         description: All notes fetched successfully
 *       404:
 *         description: Notes not found
 */

/**
 * @swagger
 * /enseignant/getAllNotesByEtudiant:
 *   get:
 *     summary: Get all notes of a student
 *     tags: [Note]
 *     parameters:
 *       - in: query
 *         name: id_etudiant
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All notes fetched successfully for the student
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /admin/getAllNotesByEtudiant:
 *   get:
 *     summary: Get all notes of a student
 *     tags: [Note]
 *     parameters:
 *       - in: query
 *         name: id_etudiant
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All notes fetched successfully for the student
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /etudiant/getAllNotesByCurrentEtudiant:
 *   get:
 *     summary: Get all notes of the current authenticated student
 *     tags: [Note]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All notes fetched successfully for the student
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /etudiant/getNoteByNomMatiere:
 *   get:
 *     summary: Get a note by student ID and subject name
 *     tags: [Note]
 *     parameters:
 *       - in: query
 *         name: nom_matiere
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Note found successfully for the given subject
 *       400:
 *         description: Bad request
 *       404:
 *         description: Matiere not found for the given subject or Note not found for the given subject
 */

