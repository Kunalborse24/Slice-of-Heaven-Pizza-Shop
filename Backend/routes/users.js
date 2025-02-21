const express=require('express');
const router=express.Router();
const db=require('../db');
const utils =require('../utils');
const cryptojs=require('crypto-js');
const jwt =require('jsonwebtoken')
const config=require('../config')

router.post('/signup',async (request,response)=>{
    const {firstName,lastName,email,password}=request.body
    try{
    const encryptedPassword=String(cryptojs.SHA256(password))
    const statement=`insert into user
                        (firstName,lastName,email,password)
                        values
                        (?,?,?,?) `
    const result=await db.execute(statement,[
            firstName,
            lastName,
            email,
            encryptedPassword
        ])
        response.send(utils.createSuccess(result))  
   }catch(ex){
        response.send(utils.createError(ex))
    }
})
router.post('/signin', async (request, response) => {
    const { email, password } = request.body;
    try {
        const encryptedPassword = String(cryptojs.SHA256(password));
        const statement = `
            SELECT id, firstName, lastName 
            FROM user 
            WHERE email = ? AND password = ?`
        
        const [users] = await db.execute(statement, [email, encryptedPassword]);

        if (users.length === 0) {
            return response.send(utils.createError('Invalid email or password'));
        }

        const user = users[0]; // Get the first user from the result

        const token = jwt.sign({
            id: user.id,
            firstName: user.firstName
        }, config.secret);

        response.send(utils.createSuccess({
            token,
            firstName: user.firstName,
            lastName: user.lastName
        }));
    } catch (ex) {
        response.send(utils.createError(ex));
    }
});

module.exports=router;