if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require("express")
const app =express()
const path = require('path');
const expressLayouts=require("express-ejs-layouts")
const indexRouter = require('../routes/index');
const { Mongoose } = require("mongoose");

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '../views'))
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('/adscale/public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewURLParser:true})
const db = mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',error=>console.log('connected to Mongoose'))

app.use('/',indexRouter)
app.listen(process.env.PORT ||3000)