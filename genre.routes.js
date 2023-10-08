const express= require('express');
const userRouter = express.Router();

const {signin,signup} = require('../controllers/genre');
userRouter.post("/signin",signin);
userRouter.post("/signup",signup);

module.exports=userRouter;
