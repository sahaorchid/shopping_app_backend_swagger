const express = require('express');
const cartRoute = express.Router()
// const { getCartDetails,addNewCartItem,deleteCartItem } = require('../../controllers/cart/index')
const { addNewCartItem,getCartDetails,deleteCartItem } = require('../../controllers/cart/index')


/**
 * @swagger
 * /cart/{user_id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: user_id,
 *        description: hlgkg
 *        required: true
 *        schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
cartRoute.get('/:user_id',getCartDetails)
// /**
//  * @swagger
//  * /cart/{user_id}:
//  *   post:
//  *     parameters:
//  *      - in: path
//  *        name: user_id,
//  *        description: hlgkg
//  *        required: true
//  *        schema:
//  *          type: integer
//  *      requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               product:
//  *                 type: integer
//  *                 example: 1
//  *               quantuty:
//  *                 type: integer
//  *                 example: 2
//  *       responses:
//  *         200:
//  *           description: get all users.
//  */
cartRoute.post('/:user_id',addNewCartItem)
/**
 * @swagger
 * /cart/{cart_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: cart_id,
 *        description: hlgkg
 *        required: true
 *        schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
cartRoute.delete('/:cart_id',deleteCartItem)

module.exports = cartRoute