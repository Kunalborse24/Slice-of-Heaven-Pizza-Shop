const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils');

// Get orders by user ID
router.get('/', async (request, response) => {
    try {
        const statement = `select id, totalAmount, createdTimestamp
                           FROM orderMaster
                           WHERE userId = ?`;
        const [orders] = await db.execute(statement, [request.data.id]);
        response.send(utils.createSuccess(orders));
    } catch (ex) {
        response.send(utils.createError(ex));
    }
});

// Get order details by order ID
router.get('/details/:id', async (request, response) => {
    const { id } = request.params
    try {
        const statement = `
                select
                 pizzaId, quantity, totalAmount, createdTimestamp
                           from orderDetails
                           WHERE orderId = ?`;
        const [details] = await db.execute(statement, [id]);
        response.send(utils.createSuccess(details));
    } catch (ex) {
        response.send(utils.createError(ex));
    }
});

// Create a new order
router.post('/', async (request, response) => {
    const { items, totalAmount } = request.body;
    try {
        // Step 1: Create order
        const statementOrder = `INSERT INTO orderMaster (userId, totalAmount)
                                VALUES (?, ?)`;
        const order = await db.execute(statementOrder, [request.data.id, totalAmount]);
        console.log(order)

        // Step 2: Find new orderId
        const orderId = order[0].insertId;

        // Step 3: Insert order details
        for (const item of items) {
            const statementOrderDetails = `
            insert into orderDetails 
            (orderId, pizzaId, quantity, totalAmount)
            values
             (?, ?, ?, ?)`
             console.log(
                orderId,
                item['pizzaId'],
                item['quantity'],
                item['totalAmount']
            )
            await db.execute(statementOrderDetails, [
                orderId,
                item['pizzaId'],
                item['quantity'],
                item['totalAmount']
            ])
        }
        response.send(utils.createSuccess('done'));
    } catch (ex) {
        console.log(ex)
        response.send(utils.createError(ex));
    }
});

module.exports = router;
