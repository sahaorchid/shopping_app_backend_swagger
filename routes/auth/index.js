const express = require('express')
// const { checkUserLogin,newUserRegister,data } = require('../../controllers/auth/index')
const { getAllUser,checkUserLogin,newUserRegister } = require('../../controllers/auth/index')

const authRouter = express.Router()

/**
 * @swagger
 * /auth/login:
 *   post:
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@gmail.com"
 *               password:
 *                 type: string
 *                 example: "1234"
 *       responses:
 *         200:
 *           description: get all users.
 */

authRouter.post('/login',checkUserLogin)
/**
 * @swagger
 * /auth/data:
 *   get:
 *     responses:
 *       200:
 *         description: get all users.
 */
authRouter.get('/data',getAllUser)

/**
 * @swagger
 * /auth/register:
 *   post:
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "sayan kundu"
 *               email:
 *                 type: string
 *                 example: "test@gmail.com"
 *               address:
 *                 type: string
 *                 example: "kolkata"
 *               description:
 *                 type: string
 *                 example: "random stuff"
 *               password:
 *                 type: string
 *                 example: "1234"
 *       responses:
 *         200:
 *           description: get all users.
 */
authRouter.post('/register',newUserRegister)

module.exports = authRouter